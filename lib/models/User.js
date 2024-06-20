import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
});

export const User = mongoose.models?.User || mongoose.model("User", UserSchema);
