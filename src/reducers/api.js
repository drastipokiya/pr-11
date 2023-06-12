// api.js

import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = () => {
  return axios.get(`${BASE_URL}/users`);
};

export const createUser = (user) => {
  return axios.post(`${BASE_URL}/users`, user);
};

export const updateUser = (userId, user) => {
  return axios.put(`${BASE_URL}/users/${userId}`, user);
};

export const deleteUser = (userId) => {
  return axios.delete(`${BASE_URL}/users/${userId}`);
};


export default axios;