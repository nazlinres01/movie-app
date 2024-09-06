import mongoose from 'mongoose';

// Kullanıcı şemasını tanımla
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
}, {
  timestamps: true, // createdAt ve updatedAt alanlarını otomatik ekler
});

// Eğer model daha önce oluşturulmuşsa tekrar oluşturmaz, aksi halde yeni bir model oluşturur
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
