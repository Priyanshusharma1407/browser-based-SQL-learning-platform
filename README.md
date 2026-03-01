# CipherSQLStudio

CipherSQLStudio is a browser-based SQL learning platform where users can practice SQL queries against predefined assignments.  

Users can:
- View SQL assignments
- Explore pre-loaded sample data
- Write and execute SQL queries in a browser-based editor
- Receive intelligent hints (not full solutions)
- See real-time query results

This project focuses on providing a safe and educational SQL practice environment.

---

## Tech Stack

### Frontend
- React (Vite)
- SCSS (Mobile-first, BEM structure)
- Monaco Editor (SQL code editor)
- Axios (API communication)
- React Router

### Backend
- Node.js
- Express.js

### Databases
- PostgreSQL (Supabase) → Executes SQL queries
- MongoDB (Atlas) → Stores assignment metadata

### LLM Integration
- Groq API (LLaMA 3.1 model)  
Used to generate conceptual hints without revealing solutions.

---

## Project Structure

```
CipherSQLStudio/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
│   └── App.jsx
│
└── README.md
```

---

## Setup Instructions

### 1️ Clone Repository

```bash
git clone <your-repo-url>
cd CipherSQLStudio
```

---

### 2️ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000

# MongoDB (Assignments)
MONGO_URI=your_mongodb_connection_string

# PostgreSQL (SQL Execution - Supabase)
POSTGRES_URL=your_postgresql_connection_string

# Groq API (LLM Hints)
GROQ_API_KEY=your_groq_api_key
```

Start backend:

```bash
npm run dev
```

---

### 3️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

##  Environment Variables Explained

| Variable       | Purpose                                        |
| -------------- | ---------------------------------------------- |
| `PORT`         | Backend server port                            |
| `MONGO_URI`    | MongoDB connection string for assignments      |
| `POSTGRES_URL` | PostgreSQL connection string for SQL execution |
| `GROQ_API_KEY` | API key for generating intelligent hints       |

---

## Data Flow (Execute Query)

1. User clicks **Run Query**
2. `runQuery()` function triggers
3. Axios sends `POST /api/query/execute`
4. Backend validates & sanitizes query
5. PostgreSQL executes SQL
6. Backend returns JSON response
7. React updates state using `setResult`
8. ResultTable re-renders with query results

---

##  Security Measures

- Only `SELECT` queries are allowed
- Dangerous keywords (DROP, DELETE, UPDATE, etc.) are blocked
- `LIMIT 100` is appended automatically
- LLM hints are filtered to prevent solution leakage

---

##  Future Improvements

- User authentication
- Save query attempts
- Progressive hint system
- Rate limiting for hint API
- Query execution history

---


