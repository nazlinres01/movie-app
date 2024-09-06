import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const client = new MongoClient(process.env.MONGODB_URI);
const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
  try {
    await client.connect();
    const db = client.db('movieDB');
    const users = db.collection('users');

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required.' }, { status: 400 });
    }

    // Check if the user exists
    const user = await users.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    return NextResponse.json({ message: 'Login successful.', token }, { status: 200 });

  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ message: 'An unexpected error occurred.', error: error.message }, { status: 500 });
  }
}
