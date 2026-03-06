import { User } from "../model/Usermodel.js";
import { Content } from "../model/Contentmodel.js";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;
import bcrypt from "bcrypt";
import { Userzodschema } from "../util/zodvalidation.js";
import type { typeofUZS } from "../util/zodvalidation.js";

export async function usersignup(req, res) {
  try {
    const check = Userzodschema.safeParse(req.body);

    if (!check.success) {
      const message = check.error.issues.map((e) => e.message);
      res.status(411).json({
        success: false,
        message: message,
      });
    }
    const { username, password }: typeofUZS = req.body;
    const hashedpassword = await bcrypt.hash(password, 10);
    await User.create({
      username,
      password: hashedpassword,
    });

    const token = jwt.sign(username, JWT_SECRET!);
    res.cookie("token", token, {
      httponly: true,
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
    });

    res.status(200).json({
      success: true,
      message: "Signed up Successfully",
    });
  } catch (error: any) {
    console.log(error);
    if (error.code == "11000") {
      res.status(403).json({
        success: false,
        message: "Username already exists.",
      });
    }
    res.status(500).json({
      success: false,
      message: "Something went wrong, plz try again.",
    });
  }
}

export async function usersignin(req, res) {
  try {
    const check = Userzodschema.safeParse(req.body);

    if (!check.success) {
      const message = check.error.issues.map((e) => e.message);
      res.status(411).json({
        success: false,
        message: message,
      });
    }
    const { username, password }: typeofUZS = req.body;

    const existinguser = await User.findOne({ username });
    console.log(existinguser);
    if (!existinguser) {
      res.status(401).json({
        success: false,
        message: "Invalid Username or Password",
      });
      return;
    }

    const token = jwt.sign(username, JWT_SECRET!);
    res.cookie("token", token, {
      httponly: true,
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
    });

    res.status(200).json({
      success: true,
      message: "Signed in Successfully",
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong, plz try again.",
    });
  }
}
