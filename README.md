# 🎵 Album Collection App

A React + Tailwind CSS based Album Management application built using JSX.  
It performs full CRUD operations using JSONPlaceholder fake REST API.

---

## 🚀 Features

- Fetch albums from API
- Add new album
- Update existing album
- Delete album
- Responsive album grid UI
- Hover actions (Edit / Delete icons)
- Loading state handling
- Clean component architecture
- Custom hook based logic separation

---

## 🛠️ Tech Stack

- React (Vite)
- JSX
- Tailwind CSS
- Axios
- React Icons
- JSONPlaceholder API

---

## 🌐 API Used

https://jsonplaceholder.typicode.com/albums

---

## 📁 Project Structure

src/
│
├── components/
│ └── albums/
│ ├── AlbumCard.jsx
│ ├── AlbumForm.jsx
│ └── AlbumList.jsx
│
├── hooks/
│ └── useAlbums.js
│
├── services/
│ └── albumApi.js
│
├── App.jsx
├── main.jsx
└── index.css

---

## ⚙️ Installation

### 1. Clone the repo

git clone <repo-url>

### 2. Install dependencies

npm install

### 3. Run the project

npm run dev
