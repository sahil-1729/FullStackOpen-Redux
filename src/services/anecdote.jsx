import axios from "axios";

const baseURL = "http://localhost:3001/anecdotes";
const getId = () => (100000 * Math.random()).toFixed(0);
const getAll = async () => {
  const response = await axios.get(baseURL);
  // console.log(`This is the response recieved`,response.data)
  return response.data;
};
const createNew = async (content) => {
  const val = {
    id: getId(),
    content: content,
    votes: 0,
  };
  const response = await axios.post(baseURL, val);
  return response.data;
};
const increaseVote = async (vote) => {
  try {
    // console.log(...vote);
    axios.put(`${baseURL}/${vote.id}`, vote);
  } catch (e) {
    console.log(`here's the error`,e);
  }
  // const response = await axios.put(baseURL,vote)
  // console.log(`The vote response`, ...response)
  // return response.data
};
export default { getAll, createNew, increaseVote };
