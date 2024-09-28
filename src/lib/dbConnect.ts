import mongoose from "mongoose";

// "?" is denoted is optional every time not return
type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

// Void means data return in Promise -- > i do not care
async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already Database is Connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

    connection.isConnected = db.connections[0].readyState;

    console.log("Db Connection Successfully ");
  } catch (error) {
    console.log("Database connection Failed", error);
    process.exit(1);
  }
}

export default dbConnect;
