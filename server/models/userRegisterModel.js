import mongoose, { Mongoose } from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

const userRegisterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const UserRegister = mongoose.model("UserRegister", userRegisterSchema);
