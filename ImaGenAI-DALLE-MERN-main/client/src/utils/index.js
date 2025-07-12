import { promptList } from '../constant/index.js'

export const getSurprisePrompt = (prompt) => {
    const randomIndex = Math.floor(Math.random() * promptList.length)
    const randomPrompt = promptList[randomIndex]

    if (randomPrompt === prompt) return getSurprisePrompt(prompt)

    return randomPrompt
}

export const removeDuplicatesById = (arr) => {
    return Object.values(
        arr.reduce((acc, current) => {
            acc[current._id] = current
            return acc
        }, {})
    )
} 