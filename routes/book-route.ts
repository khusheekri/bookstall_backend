import express from "express";
import book from '../controllers/book-controller';
import authentication from "../middlewares/auth_middleware";

const router =  express.Router();

router.use(authentication)

    router.route('/')
    .get(book.getAllBooks)
    .post(book.createBook);

    router.route("/:id")
    .get(book.getBookById)
    .put(book.updateBookById)
    .delete(book.deleteBookById);

export default router;