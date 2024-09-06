// src/api/signup/route.js

import { connectToDatabase } from '../../lib/mongodb';
import { hash } from 'bcryptjs'; // Şifreyi hashlemek için

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return new Response(JSON.stringify({ message: 'Username, email, and password are required.' }), { status: 400 });
    }

    const { db } = await connectToDatabase();
    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
      return new Response(JSON.stringify({ message: 'User already exists with this email.' }), { status: 400 });
    }

    const hashedPassword = await hash(password, 12); // Şifreyi hashle

    const result = await db.collection('users').insertOne({
      username,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: 'User registered successfully.' }), { status: 201 });

  } catch (error) {
    console.error('Sign up error:', error);
    return new Response(JSON.stringify({ message: 'Internal server error.' }), { status: 500 });
  }
}
