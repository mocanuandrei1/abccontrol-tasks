"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <Button type="submit" variant="outline" size="sm" onClick={() => signOut()}>
      Deconecteaza-te
    </Button>
  );
};

export default LogoutButton;
