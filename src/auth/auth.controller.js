import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {
  createUser,
  findUserByEmail
} from "../models/user.model.js";

export const register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  const existingUser = findUserByEmail(email);
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  const user = await createUser({ email, password });

  res.status(201).json({
    id: user.id,
    email: user.email
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = findUserByEmail(email);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  res.json({ token });
};
