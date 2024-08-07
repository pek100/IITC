import mongoose from 'mongoose';

export const Role = mongoose.model("Role", new mongoose.Schema({userType: { type: String, enum: ['user', 'moderator', 'admin']}}));