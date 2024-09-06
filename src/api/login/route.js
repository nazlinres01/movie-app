// src/api/login/route.js

import { connectToDatabase } from '../../lib/mongodb';
import { compare } from 'bcryptjs'; // Kullanıcı şifrelerini karşılaştırmak için
import { sign } from 'jsonwebtoken'; // JWT oluşturmak için

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ message: 'Email and password are required.' }), { status: 400 });
    }

    const { db } = await connectToDatabase();
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ message: 'No user found with this email.' }), { status: 401 });
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: 'Invalid password.' }), { status: 401 });
    }

    // JWT oluştur
    const token = sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return new Response(JSON.stringify({ token }), { status: 200 });

  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ message: 'Internal server error.' }), { status: 500 });
  }
}
