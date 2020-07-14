import axios from "axios";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A"

export const signup = async (body) => {
    try {
        const response = await axios.post(`${baseUrl}/signup`, body)
        return response.data
    } catch (error) {
        return error.response.data

    }
}

export const login = async (body) => {
    try {
        const response = await axios.post(`${baseUrl}/login`, body)
        return response.data
    } catch (error) {
        return error.response.data
    }
} 
