import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./Config/db.js";
import userRouter from "./routes/user.route.js";
import bookRouter from "./routes/book.route.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/authuser", userRouter);
app.use("/api/book", bookRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to LibSpace API!",
    endpoints: {
      auth: "/api/authuser",
      books: "/api/book"
    },
    documentation: {
      register: "POST /api/authuser/register",
      login: "POST /api/authuser/login", 
      logout: "POST /api/authuser/logout",
      addBook: "POST /api/book/add",
      getBooks: "GET /api/book/",
      getBookById: "GET /api/book/:bookId",
      updateBook: "PUT /api/book/:bookId",
      deleteBook: "DELETE /api/book/:bookId"
    }
  });
});

app.listen(PORT, () => {
  connectDb();
  console.log(`Our server is working at PORT :${PORT}`);
});
