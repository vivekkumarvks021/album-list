import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/albums";

export const fetchAlbums = () => {
  return axios.get(API_URL);
};

export const createAlbum = (albumData) => {
  return axios.post(API_URL, albumData);
};

export const updateAlbum = (id, updatedData) => {
  return axios.put(`${API_URL}/${id}`, updatedData);
};

export const removeAlbum = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
