import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = await User.create({ username, email, password });

  try {
    await newUser.save();
    return res.status(201).json({
      message: "User created Successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
