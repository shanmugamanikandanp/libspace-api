import express from "express";
import { verifyToken } from "../middlewares/verify_token.js";
import bookController from "../controller/bookController.js";

const bookRouter = express.Router();


bookRouter.post("/add", verifyToken, bookController.addBook);
bookRouter.get("/", verifyToken, bookController.getAllBooks);
bookRouter.get("/:bookId", verifyToken, bookController.getBookById);
bookRouter.put("/:bookId", verifyToken, bookController.updateBook);
bookRouter.delete("/:bookId", verifyToken, bookController.deleteBook);



export default bookRouter