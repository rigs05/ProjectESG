import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import { Users } from "../db/userSchema";

// REGISTRATION CONTROLLER
export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as { email: string; password: string };

    // Email, Password Validation
    if (!email || !password) {
      return res.send({ message: "Input correct email or password." });
    }
    const userExist = await Users.findOne({ email });
    if (userExist) {
      return res.json({ note: "User already exists, kindly login." });
    }

    // Create plain password into hashed password using bcrypt
    const hashPassword: string = await bcrypt.hash(password, 10);

    // New User entry in database and status
    const newUser = new Users({ email: email, password: hashPassword });
    newUser.save();
    res
      .status(200)
      .json({ note: "Successfully added the user. Please Login." });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error." });
    console.error(`Error during Signup:\n ${error}`);
  }
};

// LOGIN CONTROLLER
export const login = async (req: Request, res: Response) => {
  try {
    const secret = process.env.SECRET_KEY as string;
    const { email, password } = req.body as { email: string; password: string };

    // Email, Password Validation
    if (!email || !password) {
      return res.send({ message: "Input correct email or password." });
    }
    const userExist = await Users.findOne({ email });
    if (!userExist) {
      return res.json({
        note: "User does not exist! Please register before login.",
      });
    }

    // Password verification
    const checkPassword = await bcrypt.compare(password, userExist.password);
    if (!checkPassword) {
      console.log(`Incorrect password entered for user ${email}.`);
      return res
        .status(401)
        .json({ message: "Incorrect password, please try again." });
    }

    // Token generation and sending to user
    const token = sign({ email }, secret, { expiresIn: "1hr" });
    console.log("the token is: " + token);
    res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error." });
    console.error(`Error during Login:\n ${error}`);
  }
};

// TOKEN AUTH AND PERSISTENCE (AFTER LOGIN)
export const userAuth = (req: Request, res: Response) => {
  try {
    // verify jwt, integrate middleware
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error." });
    console.error(`Token validation failed. :\n ${err}`);
  }
};
