import { Router } from "express";
import { authenticate } from "../auth/auth.middleware.js";
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
} from "../controllers/items.controller.js";

const router = Router();

router.get("/", authenticate, getAllItems);
router.get("/:id", authenticate, getItemById);
router.post("/", authenticate, createItem);
router.put("/:id", authenticate, updateItem);
router.delete("/:id", authenticate, deleteItem);

export default router;
