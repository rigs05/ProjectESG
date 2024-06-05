import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import { verify } from "jsonwebtoken";

export const verifyJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const secret = process.env.SECRET_KEY as string;
    const authHeader = req.headers.authorization; // fetch token from headers
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      console.log("Unauthorized access.");
      return res.status(401).json({ msg: "Unauthorized" });
    }

    // Token validation and passing the control
    const decodeToken = verify(token, secret);
    if (!decodeToken) {
      console.log("Forbidden token id.");
      return res
        .status(403)
        .json({ Error: "You are not logged in. Invalid token." });
    }
    next();
  } catch (err) {
    console.log("Error in verifying the token.");
  }
};
