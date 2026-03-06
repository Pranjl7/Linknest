import mongoose from "mongoose";
const Objectid = mongoose.Schema.Types.ObjectId;

const TagsSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

export const Tags = mongoose.model("tags", TagsSchema);
