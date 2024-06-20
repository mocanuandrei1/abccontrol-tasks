"use server";

import { signIn, signOut } from "@/auth";
import { connectDB } from "@/lib/db";
import { User } from "@/lib/models/User";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";
import { z } from "zod";
import { userSchema } from "@/lib/zodSchema";

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
  const rol = formData.get("role");

  const result = userSchema.safeParse(formData);

  if (!result.success) {
    throw new Error(result.error.errors[0].message);
  }

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
    role: rol,
  });
  console.log("User created");
  redirect("/admin");
};

const userSignOut = async () => {
  await signOut({ calbackUrl: "/login", redirect: true });
};

const getUsers = async () => {
  await connectDB();
  const users = await User.find();
  return users;
};

const deleteUser = async (id) => {
  await connectDB();
  await User.findByIdAndDelete(id);

  redirect("/admin");
};

const updateUser = async (id, formData) => {
  const username = formData.get("username");
  const password = formData.get("password");
  const role = formData.get("role");

  await connectDB();

  const existingUser = await User.findById(id);

  if (!existingUser) {
    throw new Error("User not found");
  }

  const hashedPassword = await hash(password, 12);

  await User.findByIdAndUpdate(id, {
    username,
    password: hashedPassword,
    role,
  });
  console.log("User updated");
  redirect("/admin");
};

export { register, login, userSignOut, getUsers, deleteUser, updateUser };
