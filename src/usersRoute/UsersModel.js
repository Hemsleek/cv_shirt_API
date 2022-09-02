import { Schema, model } from 'mongoose';

const required = true;

const usersSchema = new Schema({
  fullname: {
    type: String,
    required,
  },
  email: {
    type: String,
    required,
    unique: true,
  },
  password: {
    type: String,
    required,

  },

}, { timestamps: true });

export default model('Users', usersSchema);
