import { Request, Response } from "express";
import { sign, decode, verify } from "jsonwebtoken";
import "dotenv/config";
import { Users } from "../db/userSchema";
import { NextFunction } from "express";

function verifyJWT(req: Request, res: Response, next: NextFunction) {
  next();
}

export const signUp = async (req: Request, res: Response) => {
  try {
    const secret = process.env.SECRET_KEY;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send({ message: "Insert correct email or password." });
    }
    const userExist = await Users.findOne({ email });
    if (userExist) {
      return res.json({ note: "User already exists, kindly login." });
    }

    const newUser = new Users({ email, password });
    newUser.save();
    res
      .status(200)
      .json({ note: "Successfully added the user. Please Login." });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error." });
    console.error(`Error during Signup:\n ${error}`);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    res.status(200).json({ note: "Login Successful." });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error." });
    console.error(`Error during Login:\n ${error}`);
  }
};
