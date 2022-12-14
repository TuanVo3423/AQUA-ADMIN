import axios from "axios";

// export const URL = "http://localhost:5000";
export const URL = "https://web-production-168e.up.railway.app";
export const FEUI = "https://aqua-fe.vercel.app";
// export const FEUI = "http://127.0.0.1:5173";

export const fetchProducts = (payload) => axios.get(`${URL}/admin`);

export const createProducts = (payload) => {
  // console.log("payload : ", payload);
  return axios.post(`${URL}/products/createPost`, payload);
};

export const updatePosts = (payload) => {
  return axios.put(`${URL}/products/${payload._id}`, payload);
};
export const deleteProducts = (payload) => {
  return axios.delete(`${URL}/products/${payload}`);
};

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
