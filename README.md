# 📚 Bookstall Backend

A simple and secure backend server for managing a book store, built using **Node.js**, **Express**, and **TypeScript**. This project supports RESTful API operations like creating, reading, updating, and deleting books. It includes authentication using API keys.

---

## 🚀 Features

- 🔐 API Key-based Authentication
- 📖 CRUD for Books (Create, Read, Update, Delete)
- 📄 Typed using TypeScript
- 🧪 Organized folder structure for controllers, routes, and middleware

---

## 🚀 Setup Instructions


### 1. Install Dependencies

```bash
npm install
```

### 2. Set up Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/booksDB
JWT_SECRET=your_jwt_secret
```

### 3. Run the Project

```bash
npm run dev
```

---

# Backend Api for bookstall backend
 Routes :
 - /login : Log in with your email and password, 
 - /signup : Create a new account with name, email and password 
 - /api/book :  get request to get all book (needs auth_token)
 

----

# 🔐 API Authentication (JWT)
All protected routes require a valid JWT token to be passed in the request headers:

makefile
Copy
Edit

Authorization: Bearer <your_jwt_token>

✅ How to obtain a JWT token:
Use the /login route by providing valid credentials (email and password).

On successful login, the API will respond with a token.

Use this token for all authenticated requests by adding it to the Authorization header as shown above.

Example:
`http
Copy
Edit
GET /api/books
Host: yourdomain.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...`

---

## 📫 API Endpoints & Sample Requests

### 🔹 Sign Up

- **POST** `/signup`
```json
{
  "name": "khushee",
  "email": "khushee@example.com",
  "password": "pass123"
}
```

---

### 🔹 Login

- **POST** `/login`
```json
{
  "email": "khushee@example.com",
  "password": "pass123"
}
```

---

### 🔹 Get All Books

- **GET** `/api/book`
- **Headers:** `x-api-key: your_api_key_here`

---

### 🔹 Get Book by ID

- **GET** `/api/book/:id`
- **Headers:** `x-api-key: your_api_key_here`

---

### 🔹 Add New Book

- **POST** `/api/book`
- **Headers:** `x-api-key: your_api_key_here`
```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "price": 299
}
```

---

### 🔹 Update Book by ID

- **PUT** `/api/book/:id`
- **Headers:** `x-api-key: your_api_key_here`
```json
{
  "title": "The Alchemist - Updated",
  "price": 349
}
```

---

### 🔹 Delete Book by ID

- **DELETE** `/api/book/:id`
- **Headers:** `x-api-key: your_api_key_here`

---

## ✅ Assumptions & Enhancements

- API key is static and set in `.env` for simplicity.
- MongoDB is used as the primary database.
- TypeScript ensures type safety and maintainability.
- Middleware handles authentication for protected routes.
- Future Enhancements:
  - Add Swagger for documentation.
  - Implement pagination and filtering for book lists.
  - Add user roles and permissions.

---

## 🛠️ Technologies Used

- Node.js
- Express
- TypeScript
- MongoDB (Mongoose)
- Dotenv
- Postman (for testing)

---
