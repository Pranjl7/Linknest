import mongoose from "mongoose";
import { Link } from "./Linkmodel.js";
import { Tags } from "./Tagmodel.js";
import { User } from "./Usermodel.js";
const Objectid = mongoose.Schema.Types.ObjectId;

const ContentSchema = new mongoose.Schema({
  link: { type: String, required: true },
  type: {
    type: String,
    enum: ["document", "tweet", "youtube", "link"],
    required: true,
  },
  title: { type: String, required: true, unique: true },
  tags: [{ type: Objectid, ref: Tags }],
  userid: { type: Objectid, ref: User, required: true },
});

export const Content = mongoose.model("content", ContentSchema);
