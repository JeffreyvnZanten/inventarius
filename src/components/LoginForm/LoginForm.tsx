"use client";
import { loginAction } from "@/serverActions/loginAction";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <form className={styles.form} action={loginAction}>
      <input
        className={styles.input}
        placeholder="E-mail"
        type="email"
        name="email"
        required
      />
      <input
        className={styles.input}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <button className={styles.button}>Login</button>
    </form>
  );
}
