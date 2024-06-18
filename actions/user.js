"use server";

import { signIn } from "@/auth";
import { connectDB } from "@/lib/db";
import { User } from "@/lib/models/User";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";

const login = async (formData) => {
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    await signIn("credentials", {
      redirectTo: "/",
      redirect: false,
      username,
      password,
    });
  } catch (error) {
    return error.message;
  }

  redirect("/");
};

const register = async (formData) => {
  const username = formData.get("username");
  const password = formData.get("password");

  await connectDB();

  // Check if username exists
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await hash(password, 12);

  // Create user
  await User.create({
    username,
    password: hashedPassword,
  });
  console.log("User created");
  redirect("/login");
};

export { register, login };
