# LibSpace API Setup Guide

## 🚀 Quick Start

### Step 1: Install MongoDB
Choose one option:

**Option A: Install MongoDB locally**
1. Download MongoDB from: https://www.mongodb.com/try/download/community
2. Install and start MongoDB service
3. MongoDB will run on: `mongodb://127.0.0.1:27017`

**Option B: Use MongoDB Atlas (Cloud)**
1. Go to: https://www.mongodb.com/atlas
2. Create free account and cluster
3. Get your connection string
4. Replace in .env file

### Step 2: Configure Environment
Copy the example file and update it:
```bash
cp .env.example .env
```

Edit `.env` file:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/libspace
JWT_SECRET=libspace_secret_key_123456789
```

### Step 3: Start Server
```bash
npm start
```

### Step 4: Test APIs
**Option A: Automatic Test**
```bash
node test-api.js
```

**Option B: Manual Testing with Postman**
Follow these steps in order:

1. **Register User**
   - POST: `http://localhost:5000/api/authuser/register`
   - Body: `{"name":"Chandana","email":"chandana3@gmail.com","password":"123456"}`

2. **Login User**
   - POST: `http://localhost:5000/api/authuser/login`
   - Body: `{"email":"chandana3@gmail.com","password":"123456"}`
   - Copy the `token` from response

3. **Add Book** (use token from step 2)
   - POST: `http://localhost:5000/api/book/add`
   - Headers: `Authorization: Bearer <token>`
   - Body: `{"url":"www.libspacebook.com","title":"think like a monk","author":"jay shetty"}`

4. **Get All Books**
   - GET: `http://localhost:5000/api/book/`
   - Headers: `Authorization: Bearer <token>`

5. **Get Specific Book**
   - GET: `http://localhost:5000/api/book/<book_id>`
   - Headers: `Authorization: Bearer <token>`

6. **Update Book**
   - PUT: `http://localhost:5000/api/book/<book_id>`
   - Headers: `Authorization: Bearer <token>`
   - Body: `{"title":"New Book Title"}`

7. **Delete Book**
   - DELETE: `http://localhost:5000/api/book/<book_id>`
   - Headers: `Authorization: Bearer <token>`

8. **Logout**
   - POST: `http://localhost:5000/api/authuser/logout`
   - Headers: `Authorization: Bearer <token>`

## 📋 API Endpoints Summary

### Authentication (`/api/authuser`)
- `POST /register` - Register new user
- `POST /login` - User login
- `POST /logout` - User logout (protected)
- `DELETE /:userId` - Delete user (protected)

### Books (`/api/book`)
- `POST /add` - Add book (protected)
- `GET /` - Get all books (protected)
- `GET /:bookId` - Get specific book (protected)
- `PUT /:bookId` - Update book (protected)
- `DELETE /:bookId` - Delete book (protected)

## 🔧 Troubleshooting

### Server Not Starting
- Check if MongoDB is running
- Verify .env file configuration
- Check if port 5000 is available

### Database Connection Error
- Verify MongoDB connection string
- Ensure MongoDB service is running
- Check network connectivity

### Authentication Errors
- Ensure you're using Bearer token format
- Check token hasn't expired
- Verify Authorization header format

## 🎯 Expected Results

After running the test script, you should see:
1. ✅ User registration successful
2. ✅ User login with JWT token
3. ✅ Book added successfully
4. ✅ All books retrieved
5. ✅ Specific book retrieved
6. ✅ Book updated successfully
7. ✅ Book deleted successfully
8. ✅ User logged out successfully

That's it! Your LibSpace API is fully functional! 🎉
