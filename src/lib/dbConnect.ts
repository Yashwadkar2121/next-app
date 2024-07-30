import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const conneaction: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (conneaction.isConnected) {
    console.log("Already Database is Connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

    conneaction.isConnected = db.connections[0].readyState;

    console.log("Db Connection Successfully ");
  } catch (error) {
    console.log("Database connection Failed", error);
    process.exit(1);
  }
}

export default dbConnect;
