import Book from "../models/book";
import { Request, Response } from "express";

// get book
const getAllBooks = async (_req: any, res: any) => {
    try {
        const books = await Book.find();
        res.json({
            books
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            message: "Could not fetch books, try again or check server."
        });
    }
};

//crete book
const createBook = async (req: any, res: any) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.json({
            success: true,
            message: "Book Created",
            data: newBook
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Could not create book, check for server error."
        });
    }
};

// book by id
export const getBookById = async (req: Request, res: Response): Promise<void> => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        res.status(404).json({ message: "Not found" });
        return;
      }
      res.json({ success: true, data: book });
    } catch (error) {
      res.status(500).json({ message: "Error fetching book" });
    }
  };
  
  
  
  // update book
  export const updateBookById = async (req: Request, res: Response): Promise<void> => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedBook) {
         res.status(404).json({ message: "Book not found" });
         return;
      }
      res.json({ success: true, message: "Book updated", data: updatedBook });
    } catch (error) {
      res.status(500).json({ message: "Error updating book", error });
    }
  };
  
  // delete book
  export const deleteBookById = async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) { 
        res.status(404).json({ message: "Book not found" });
        return;
      }
      res.json({ success: true, message: "Book deleted" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting book", error });
    }
  };
export default { getAllBooks , createBook , getBookById , updateBookById , deleteBookById };
