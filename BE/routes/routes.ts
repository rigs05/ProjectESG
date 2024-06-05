import express from "express";
const router = express.Router();
import { signUp, login } from "../controller/userController";

// Signup Route
router.post("/signup", signUp);

// Login Route
router.get("/login", login);

export default router;
