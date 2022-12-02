import axios from "axios";

// export const URL = "http://localhost:5000";
export const URL = "https://aqua-vku.herokuapp.com";

export const fetchProducts = (payload) => axios.get(`${URL}/admin`);

export const createProducts = (payload) => {
  console.log("payload : ", payload);
  axios.post(`${URL}/products/createPost`, payload);
};

export const updatePosts = (payload) =>
  axios.put(`${URL}/products/${payload._id}`, payload);
export const deleteProducts = (payload) =>
  axios.delete(`${URL}/products/${payload}`);

export const getAllUsers = (payload) => {
  return axios.get(`${URL}/users`);
};

export const getChatUsers = (payload) => {
  return axios.get(`${URL}/users?id=${payload}`, payload);
};

export const logout = () => axios.get(`${URL}/auth/logout`);

export const fetchChat = (payload) => {
  return axios.get(`${URL}/chat?id=${payload}`, payload);
};
