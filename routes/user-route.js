import express from "express";
import {
  getAllTasks,
  addTask,
  deleteTaskById,
  updateTaskById,
} from "../controllers/user-controller.js";

const router = express.Router();

router.get("/get-all", getAllTasks);
router.post("/add-task", addTask);
router.delete("/delete/:id", deleteTaskById);
router.patch("/update/:id", updateTaskById);

export default router;
