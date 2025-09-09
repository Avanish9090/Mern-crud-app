# MERN CRUD App with Tailwind CSS & Flowbite

A full-stack **CRUD** (Create, Read, Update, Delete) application built using the **MERN stack** (MongoDB, Express.js, React, Node.js), styled with **Tailwind CSS**, and UI components powered by **Flowbite**.

## 🚀 Features

- Create, Read, Update, and Delete functionality
- RESTful API with Express and MongoDB
- Responsive UI with Tailwind CSS
- Prebuilt components with Flowbite (modals, buttons, inputs, etc.)
- Organized folder structure for scalability

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, Flowbite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose)
- **API Communication**: Axios or Fetch

---

## 📁 Project Structure
mern-crud-app/
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── tailwind.config.js
├── server/ # Express backend
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── config/
│ └── server.js
├── .env
├── package.json
└── README.md

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-crud-app.git
cd mern-crud-app
cd server
npm install
MONGO_URI=your uri
PORT=your db port
cd ../client
npm install
npm run dev
npm install flowbite
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite-react/**/*.js"
],
plugins: [
  require('flowbite/plugin')
],
import 'flowbite';


And the live demo is in about section..


