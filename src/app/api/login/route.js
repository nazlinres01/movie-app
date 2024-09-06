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
      return NextResponse.json({ message: 'E-posta ve şifre gereklidir.' }, { status: 400 });
    }

    // Kullanıcıyı kontrol et
    const user = await users.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'Geçersiz e-posta veya şifre.' }, { status: 401 });
    }

    // Şifreyi doğrula
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Geçersiz e-posta veya şifre.' }, { status: 401 });
    }

    // JWT token oluştur
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    return NextResponse.json({ message: 'Giriş başarılı.', token }, { status: 200 });

  } catch (error) {
    console.error('Giriş sırasında bir hata oluştu:', error);
    return NextResponse.json({ message: 'Beklenmeyen bir hata oluştu.', error: error.message }, { status: 500 });
  }
}
