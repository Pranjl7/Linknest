import 'dotenv/config'
import mongoose from "mongoose";
const dburl = process.env.MONGO_URI;

const connectdb = async () => {
  if (!dburl) {
    console.error("MONGO_URI is not defined in the environment");
    process.exit(1);
  }
  try {
    await mongoose.connect(dburl);
    console.log("DB Connected.");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectdb;
