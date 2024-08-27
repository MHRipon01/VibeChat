import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to mdb");
  } catch (error) {
    console.log("error connecting to mdb", error.message);
  }
};

export default connectToMongoDB;
