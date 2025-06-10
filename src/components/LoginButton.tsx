"use client";

import { useFormStatus } from "react-dom";

export default function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Inloggen..." : "Login"}
    </button>
  );
}
