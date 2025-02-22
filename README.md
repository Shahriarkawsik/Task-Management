# Task Management Application

## 📌 Description

A real-time **Task Management Application** where users can **add, edit, delete, reorder, and move tasks** across three categories: **To-Do, In Progress, and Done**. The app ensures **instant updates** using **WebSockets** and **MongoDB Change Streams**.

## 🚀 Live Demo

🔗 [Live App URL](#)

## 📸 Features

- 🔐 **Authentication**: Firebase Google Sign-In.
- ✅ **Task Management**: Create, edit, delete, and reorder tasks.
- 📂 **Drag and Drop**: Move tasks between categories.
- 💾 **Real-time Sync**: Uses WebSockets for live updates.
- 🎨 **Modern UI**: Built with **Vite.js, Tailwind CSS, and React**.
- 📱 **Fully Responsive**: Works smoothly on **desktop & mobile**.

## ⚙️ Tech Stack

### **Frontend**

- ⚛️ React.js (with Vite.js)
- 🎨 Tailwind CSS + DaisyUI
- 🏗️ @dnd-kit/core (Drag & Drop)
- 🔥 Firebase Authentication

### **Backend**

- 🟢 Node.js & Express.js
- 🍃 MongoDB (with Change Streams)
- ⚡ WebSockets (Socket.io)

## 🛠️ Installation Steps

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/Shahriarkawsik/Task-Management.git
   cd Task-Management
   ```
2. **Frontend Setup**:
   ```sh
   cd client
   npm install
   npm run dev
   ```
3. **Backend Setup**:
   ```sh
   cd server
   npm install
   npm start
   ```
4. **Set Up Environment Variables**:
   - Create a `.env` file in the backend folder.
   - Add your MongoDB URI and Firebase API credentials.

## 📡 API Endpoints

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| POST   | `/tasks`     | Add a new task      |
| GET    | `/tasks`     | Retrieve all tasks  |
| PUT    | `/tasks/:id` | Update task details |
| DELETE | `/tasks/:id` | Delete a task       |

## 🎯 Folder Structure

```
/task-management-app
 ├── client (Frontend - React.js)
 │   ├── src
 │   │   ├── components
 │   │   ├── pages
 │   │   ├── context
 │   │   ├── hooks
 │   │   ├── styles
 │   ├── public
 │   ├── .env
 │   ├── vite.config.js
 │   ├── package.json
 │
 ├── server (Backend - Node.js & Express.js)
 │   ├── routes
 │   ├── models
 │   ├── controllers
 │   ├── config
 │   ├── .env
 │   ├── server.js
 │   ├── package.json
 │
 ├── README.md
```

## 🚀 Future Enhancements

- 🌑 **Dark Mode** toggle.
- 📅 **Task Due Dates** with color indicators.
- 📊 **Activity Log** for tracking changes.

💻 **Developed by**: [Md. Shahriar Kabir](https://github.com/Shahriarkawsik) 🚀
