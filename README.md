# 💼 Job Portal — MERN Stack Project

A full-stack **Job Portal** web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
This platform allows users to search and apply for jobs, while recruiters/admins can post and manage job listings.

---

## 🚀 Features

### 👤 User Features

* User Registration & Login
* Secure Authentication (JWT)
* Browse Job Listings
* Search & Filter Jobs
* Apply for Jobs
* View Applied Jobs

### 🏢 Recruiter / Admin Features

* Post New Jobs
* Edit Job Details
* Delete Job Listings
* View Applicants

---

## 🛠️ Tech Stack

**Frontend**

* React.js
* React Router
* Axios
* CSS / Bootstrap / Tailwind

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* dotenv

---

## 📂 Project Structure

```
job-portal/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── assets/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Avi0221/JOB-Portal
cd job-portal
```

---

## 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend server:

```bash
npm run server
```

or

```bash
node server.js
```

---

## 🎨 Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

---

## 🔐 Environment Variables

Create `.env` file in backend folder:

```
MONGO_URI=
JWT_SECRET=
PORT=
```

⚠️ Never upload your `.env` file to GitHub.

---

## 🤝 Contribution Guide (Team Workflow)

Follow these steps to contribute properly:

### Step 1 — Clone Repo

```bash
git clone https://github.com/Avi0221/JOB-Portal
```

### Step 2 — Create New Branch

```bash
git checkout -b feature/your-feature-name
```

### Step 3 — Work on Your Module Only

Keep changes limited to your assigned feature.

### Step 4 — Commit Changes

```bash
git add .
git commit -m "Added: short description"
```

### Step 5 — Push Branch

```bash
git push origin feature/your-feature-name
```

### Step 6 — Create Pull Request

* Open Pull Request to `main`
* Add proper description
* Request review from teammates

---

## 📋 Contribution Rules

* Do not push directly to `main`
* Always create a feature branch
* Use clear commit messages
* Pull latest code before starting work

```bash
git pull origin main
```

---

## 👥 Group Members

* Avinash
* Dev Kumar Mahato
* Harsh
* Falak Fatima
* Himanshu kumar
* Abhishek
* Shamba 

---

## 🧪 Testing

* API tested using Postman
* Form validations checked
* Authentication & protected routes verified



## 📄 License

This project is created for academic and training purposes.

---

## ⭐ Support

If you like this project, consider giving it a star ⭐
