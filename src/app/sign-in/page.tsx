"use client";
import { loginAction } from "@/serverActions/loginAction";
import styles from "./page.module.css";
import LoginButton from "@/components/LoginButton";

export default function LoginPage() {
  return (
    <div className={styles.container}>
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
        <LoginButton />
      </form>
    </div>
  );
}
