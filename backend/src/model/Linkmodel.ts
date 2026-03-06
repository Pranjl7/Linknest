import mongoose from "mongoose";
import { User } from "./Usermodel.js";
const Objectid = mongoose.Schema.Types.ObjectId;

const LinkSchema = new mongoose.Schema({
  hash: { type: String, required: true },
  userid: { type: Objectid, ref: User, required: true },
});

export const Link = mongoose.model("link", LinkSchema);