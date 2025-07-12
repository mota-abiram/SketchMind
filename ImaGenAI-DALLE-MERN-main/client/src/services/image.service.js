import axios from '../utils/axios.js'

const generateImage = (data) =>
    axios.post('/image/generate', data).then(
        (response) => response,
        (error) => error
    )

const fetchImages = (page, limit = 8) =>
    axios.get(`/image/all?page=${page}&limit=${limit}`).then(
        (response) => response,
        (error) => error
    )

const imageService = {
    generateImage,
    fetchImages,
}

export default imageService 