import axios from "axios";

export const loadUsersApi = async (start,end) =>
  await axios.get(` https://api.punkapi.com/v2/beers?_start=${start}&_end=${end}`);

// export const createUserApi = async (user) =>
//   await axios.post(`http://localhost:5000/users`, user);

// export const deleteUserApi = async (id) =>
//   await axios.delete(`http://localhost:5000/users/${id}`);

// export const updateUserApi = async (id, user) =>
//   await axios.put(`http://localhost:5000/users/${id}`, user);
export const searchApi = async (query) =>
  await axios.get(` https://api.punkapi.com/v2/beers?q=${query}`);