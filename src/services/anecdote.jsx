import axios from "axios";

const baseURL = "http://localhost:3001/anecdotes"
const getId = () => (100000 * Math.random()).toFixed(0);
const getAll = async () => {
    const response = await axios.get(baseURL)
    // console.log(`This is the response recieved`,response)
    return response.data
}
const createNew = async (content) => {
    const val = {
        id : getId(),
        content : content,
        votes : 0
    }
    const response = await axios.post(baseURL,val)
    return response.data
}
export default {getAll, createNew}