import axios from "axios";

// const URL = 'http://localhost:5000'; 
const URL = 'https://aqua-vku.herokuapp.com'; 

export const fetchProducts = (payload) => axios.get(`${URL}/admin`);

export const createProducts = (payload) => {
    console.log('payload : ', payload);
    axios.post(`${URL}/products/createPost`,payload);
}


export const updatePosts = (payload) => axios.put(`${URL}/products/${payload._id}`, payload);
export const deleteProducts = (payload) => axios.delete(`${URL}/products/${payload}`);


