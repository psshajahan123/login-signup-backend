import express from "express";

import { UserRegister } from "../models/userRegisterModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res
        .status(400)
        .send({ message: "Send All Required Fields: name, email, password" });
    }
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    const user = await UserRegister.create(newUser);

    return res.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

export default router;
