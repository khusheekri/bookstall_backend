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