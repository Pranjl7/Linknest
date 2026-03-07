import { User } from "../model/Usermodel.js";
import { Content } from "../model/Contentmodel.js";
import { Contentzodschema } from "../util/zodvalidation.js";
import type { typeofCZS } from "../util/zodvalidation.js";
import { Tags } from "../model/Tagmodel.js";
import mongoose from "mongoose";

export async function viewcontent(req, res) {
  try {
    const contents = await Content.find({})
      .populate({ path: "tags", select: "title" })
      .populate({ path: "userid", select: "username" });
    res.status(200).json({
      success: true,
      message: contents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, plz try again.",
    });
  }
}

export async function viewspecificcontent(req, res) {
  try {
    const contentid = req.params.contentid;
    const contentobject = await Content.findById(contentid)
      .populate("tags")
      .populate("userid");
    res.status(200).json({
      success: true,
      message: contentobject,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong, plz try again.",
    });
  }
}

export async function createcontent(req, res) {
  try {
    const username: string = req.userid;
    const existinguser: any = await User.findOne({ username });
    const check = Contentzodschema.safeParse(req.body);

    if (!check.success) {
      const message = check.error.issues.map((e) => e.message);
      res.status(411).json({
        success: false,
        message: message,
      });
      return;
    }

    const { status, link, type, title, tags }: typeofCZS = req.body;

    const tagsid = await Promise.all(
      (tags ?? []).map(async (tag) => {
        const doc = await Tags.findOneAndUpdate(
          { title: tag }, // filtering condition
          { title: tag }, // updating condition (no real change)
          { upsert: true, returnDocument: "after" }, // create if missing and return updated doc
        );
        return doc._id;
      }),
    );

    // for removing duplicate tags/
    const uniquetagsid: any = [
      ...new Set(tagsid.map((tag) => tag.toString())),
    ].map((tag) => new mongoose.Types.ObjectId(tag));

    await Content.create({
      status,
      link,
      type,
      title,
      tags: uniquetagsid,
      userid: existinguser._id,
    });

    res.status(201).json({
      success: true,
      message: "Content created Successfully",
    });
  } catch (error: any) {
    console.log(error);
    if (error.code == "11000") {
      res.status(403).json({
        success: false,
        message: "Title already existed.",
      });
      return;
    }

    res.status(500).json({
      success: false,
      message: "Something went wrong, plz try again.",
    });
  }
}

export async function deletecontent(req, res) {
  try {
    const username = req.userid;
    const existinguser = await User.findOne({ username });
    if (!existinguser) {
      res.status(401).json({
        success: false,
        message: "Unauthorized user.",
      });
      return;
    }
    const title = req.params.title;
    const content = await Content.findOne({ title });
    if (!content) {
      res.status(404).json({
        success: false,
        message: "Content not found.",
      });
      return;
    }

    console.log(username);
    if (existinguser._id.toString() !== content.userid.toString()) {
      res.status(401).json({
        success: false,
        message: "Unauthorized user.",
      });
      return;
    }
    await Content.deleteOne({ _id: content._id });
    res.status(200).json({
      success: true,
      message: "Content deleted successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong, plz try again.",
    });
  }
}
