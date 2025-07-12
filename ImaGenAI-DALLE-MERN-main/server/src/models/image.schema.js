import { Schema, model } from 'mongoose'

const imageSchema = new Schema(
    {
        prompt: {
            type: String,
            require: true,
        },
        imageUrl: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
)

const Image = model('images', imageSchema)

export default Image 