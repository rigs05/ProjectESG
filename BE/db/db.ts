import mongoose from "mongoose";
// import { config } from "dotenv";
import "dotenv/config";

let dbUrl = process.env.DB_URL as string;

export const dbConnection = async () => {
  try {
    await mongoose.connect(dbUrl);
  } catch (err) {
    console.error(`Unable to connect to Database!\n ${err}`);
  }
};
