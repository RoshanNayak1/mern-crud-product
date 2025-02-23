# MERN Stack Project

## 📌 Overview

This is a **full-stack MERN application** that includes a **React frontend**, an **Express.js backend**, and a **MongoDB database**. The project is deployed on **Render**.

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Chakra UI
- **Backend:** Express.js, Node.js
- **Database:** MongoDB
- **Deployment:** Render

## 📂 Project Structure

```
mern-stack-project/
│── backend/         # Express backend
│── frontend/        # React frontend (built with Vite)
│── package.json     # Root package.json (handles both frontend & backend)
│── .env             # Environment variables
│── README.md        # Project documentation




## 🚀 Local Development Setup

### 1️⃣ Clone the Repository

git clone https://github.com/your-repo/mern-stack-project.git
cd mern-stack-project


### 2️⃣ Install Dependencies
Run the following command to install dependencies:

npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file inside the root folder and add:

MONGO_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=production

```

### 4️⃣ Start the Backend

cd backend
npm start
```

- **Runs on `http://localhost:5000/`**
- Logs: _"Server running on port 5000" & "MongoDB Connected"_

### 5️⃣ Start the Frontend

In another terminal:

cd frontend
npm run dev

````
- **Runs on `http://localhost:5173/`**

---

## 🌍 Deployment on Render

### **1️⃣ Deploy the Backend**
1. Go to [Render](https://dashboard.render.com/) and create a **Web Service**.
2. Connect your **GitHub repository**.
3. Set the **root directory** to `./backEnd
4. Set the **Build Command** to:
   ```sh
   npm install
````

5. Set the **Start Command** to:
   ```sh
   node server.js
   ```
6. Add **Environment Variables** (`MONGO_URI`, `PORT`).
7. Deploy the service.

## 📜 Available Scripts

| Command         | Description                                          |
| --------------- | ---------------------------------------------------- |
| `npm start`     | Runs the backend in production (Render)              |
| `npm run dev`   | Starts frontend (Vite) and backend (nodemon) locally |
| `npm run build` | Installs frontend dependencies & builds the project  |

---

## 🎨 Frontend Features

- **Chakra UI** for styling
- **React Router** for navigation
- **Zustand** for state management
- **React Toastify** for notifications
- **Light/Dark Mode**

## 🚀 Backend Features

- **Express.js** for API routes
- **MongoDB (via Mongoose)** for data storage
- **CORS** for secure API calls
- **dotenv** for environment variable management

---

## 📄 License

This project is **ISC Licensed**.

🚀 Happy Coding! 🎉
