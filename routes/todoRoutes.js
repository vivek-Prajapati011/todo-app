import express from "express";
import { ObjectId } from "mongodb";
import { addTodo, dltTodoById, getAllTodo, getTodoById, updateTodo } from "../controllers/todoController.js";

const router = express.Router();

// ✅ Create a new to-do item
router.post("/", addTodo);

// ✅ Get all to-do items
router.get("/", getAllTodo);

// ✅ Get a single to-do item (Express 5 syntax)
router.get("/{id}",getTodoById );

// ✅ Update a to-do item
router.put("/{id}",updateTodo);

// ✅ Delete a to-do item
router.delete("/{id}",dltTodoById );

export default router;
