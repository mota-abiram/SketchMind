import Image from '../models/image.schema.js'

export const createImage = async (input) => {
    const { imageUrl, prompt } = input

    const newImage = new Image({
        imageUrl,
        prompt,
    })

    return newImage.save()
}

export const findAllImages = async (
    limit,
    skip
) => {
    return Image.find().skip(skip).limit(limit).sort({ createdAt: -1 }).exec()
} 