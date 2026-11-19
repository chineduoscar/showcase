import User from "../models/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      res.status(400).json({
        message: "Email already exist",
      });

      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const data = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Successfully Registered",
      data: {
        id: data._id,
        fullName: data.fullName,
        email: data.email,
      },
      token: generateToken(data),
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Unexpected Server Error",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(400).json({
        message: "Invalid credentials",
      });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(400).json({
        message: "Invalid credentials",
      });
      return;
    }

    res.status(201).json({
      message: "Successfully Login",
      data: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
      token: generateToken(user),
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Unexpected Server Error",
      error: error.message,
    });
  }
};

const generateToken = (data) => {
  const payload = {
    id: data._id,
    fullName: data.fullName,
    email: data.email,
    role: data.role,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });

  return token;
};

export { register, login };
