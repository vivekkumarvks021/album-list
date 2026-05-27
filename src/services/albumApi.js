import axios from "axios";

// Base API endpoint
const API_URL = "https://jsonplaceholder.typicode.com/albums";

// Fetch all albums
export const fetchAlbums = () => {
  return axios.get(API_URL);
};

// Create a new album
export const createAlbum = (albumData) => {
  return axios.post(API_URL, albumData);
};

// Update existing album
export const updateAlbum = (id, updatedData) => {
  return axios.put(`${API_URL}/${id}`, updatedData);
};

// Delete album
export const removeAlbum = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
