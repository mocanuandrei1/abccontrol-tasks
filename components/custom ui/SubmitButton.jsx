"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export function SubmitButton({ text, size, variant }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size={size} variant={variant} disabled={pending}>
      {pending ? "Se incarca..." : `${text}`}
    </Button>
  );
}
