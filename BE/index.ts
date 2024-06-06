import express from "express";
import { dbConnection } from "./db/db";
const app = express();
import "dotenv/config";
import cors from "cors";
import routes from "./routes/routes";

const PORT = process.env.PORT;
// Instantiating a server connection function
const serverConnection = async () => {
  try {
    await dbConnection();

    app.use(express.json());
    app.use(cors());
    app.use(routes);

    // Open and listen to PORT
    const connection = app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}.`);
    });

    // Error handling
    connection.on("error", (err) => {
      return console.error(
        `Error Occurred while connecting to ${PORT}!\n\n ${err}`
      );
    });
  } catch (error) {
    console.error(`Internal server error!\n ${error}`);
  }
};

// Initializing the Server Connection
serverConnection();
