import { Schema, model } from 'mongoose'

const required = true

const villagersSchema = new Schema({
    fullName: {
        type: String,
        required,
        unique: true
    },
    color: { type: String, required: true },
    size: {
        type: String,
        required
    },
    pattern: {
        type: String,
        required
    },
    logo: {
        type: Array,
        required
    }

}, { timestamps: true }
)

export const villager = model('Villager', villagersSchema)
