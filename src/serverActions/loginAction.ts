// app/actions/login.ts
"use server";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { z } from "zod";

type LoginFormData = {
  email: string;
  password: string;
};

const loginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});

export async function loginAction(formData: FormData) {
  try {
    const rawData: LoginFormData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const validatedData = loginSchema.safeParse(rawData);

    if (!validatedData.success) {
      console.error("Validatie mislukt:", validatedData.error.errors);
      return;
      // return {
      //   success: false,
      //   message: "Invalid form data",
      // };
    }

    await auth.api.signInEmail({
      body: {
        email: validatedData.data.email,
        password: validatedData.data.password,
      },
    });
  } catch (error) {
    console.error("Inlogpoging mislukt:", error);
  }

  redirect("/");
}
