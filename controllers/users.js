const { prisma } = require("../prisma/prisma-client.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * @route POST api/user/login
 * @desc Login
 * @access Public
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Enter Fields" });
    }
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    const isPasswordCorrect =
      user && (await bcrypt.compare(password, user.password));
    const secret = process.env.JWT_SECRET;

    if (user && isPasswordCorrect && secret) {
      return res.status(200).json({
        id: user.id,
        email: user.email,
        name: user.name,
        token: jwt.sign({ id: user.id }, secret, { expiresIn: "30d" }),
      });
    } else {
      return res.status(400).json({ message: "Incorrect email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Oops something gone wrong" });
  }
};

/**
 * @route POST api/user/register
 * @desc Registration
 * @access Public
 */
const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({ message: "All field are required" });
    }

    const registeredUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (registeredUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    const secret = process.env.JWT_SECRET;

    if (user && secret) {
      res.status(201).json({
        id: user.id,
        email: user.email,
        name,
        token: jwt.sign({ id: user.id }, secret, { expiresIn: "30d" }),
      });
    } else {
      return res
        .status(400)
        .json({ message: "Error.. registration gone wrong" });
    }
  } catch (error) {
    res.status(500).json({ message: "Oops something gone wrong" });
  }
};

/**
 * @route GET api/user/current
 * @desc current user
 * @access Private
 */
const current = (req, res) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: "Oops something gone wrong" });
  }
};

module.exports = {
  login,
  register,
  current,
};
