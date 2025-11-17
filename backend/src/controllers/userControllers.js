import { createUser, validateUser } from "../models/userModels.js";

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = await createUser(username, email, password);
    return res.status(201).json({ 
      message: "User registered successfully", 
      user: newUser 
    });

  } catch (error) {
    console.error("REGISTER ERROR:", error);

    if (error.code === "23505") {
      // UNIQUE violation
      return res.status(400).json({
        message: "Username or email already exists"
      });
    }

    res.status(500).json({ 
      message: "Server error",
      error: error.message 
    });
  }
};

export const loginUser = async (req, res) => {
  const {email, password}=req.body;

  try {
    const user = await validateUser(email, password);
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ 
      message: "Login successful!", 
      user 
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};