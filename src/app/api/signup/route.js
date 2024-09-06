import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const client = new MongoClient(process.env.MONGODB_URI);

export async function POST(req) {
  try {
    await client.connect();
    const db = client.db('movieDB');
    const users = db.collection('users');

    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json({ message: 'Username, email, and password are required.' }, { status: 400 });
    }

    // Check if the user already exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists.' }, { status: 409 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    const result = await users.insertOne({
      username,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: 'User registered successfully.', userId: result.insertedId }, { status: 201 });

  } catch (error) {
    console.error('Error during signup:', error);
    return NextResponse.json({ message: 'An unexpected error occurred.', error: error.message }, { status: 500 });
  }
}
