import { Schema, model } from 'mongoose';

const required = true;

const villagersSchema = new Schema({
  fullname: {
    type: String,
    required,
    unique: true,
  },
  size: {
    type: String,
    required,
  },
  patterns: {
    type: Array,
    required,
  },
}, { timestamps: true });

export default model('Villager', villagersSchema);
