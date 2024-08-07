import mongoose from 'mongoose';
// import Role from './Role';


const userSchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique:
true },
password: { type: String, required: true },
role: { type: mongoose.Schema.Types.ObjectId,
ref: 'Role',
required: true },
sport: { type: String, required: true, default: "judo"}
})
export const User = mongoose.model('User', userSchema);

