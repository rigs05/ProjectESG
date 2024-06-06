import express from "express";
const router = express.Router();
import { verifyJWT } from "../controller/verifyMiddleware";
import { signUp, login, userAuth } from "../controller/userController";

// Signup Route
router.post("/signup", signUp);

// Login Route
router.get("/login", login);

// Token verification
router.get("/user", verifyJWT, userAuth);

export default router;
