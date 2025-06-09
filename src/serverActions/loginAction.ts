// app/actions/login.ts
"use server";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  await auth.api.signInEmail({
    body: {
      email: formData.get("email")?.toString() ?? "",
      password: formData.get("password")?.toString() ?? "",
    },
  });

  redirect("/dashboard");
}
