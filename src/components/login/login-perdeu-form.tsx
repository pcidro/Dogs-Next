"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import styles from "./login-form.module.css";
import PasswordLost from "@/actions/password-lost";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled={pending}>Carregando...</Button>
      ) : (
        <Button>Enviar email</Button>
      )}
    </>
  );
}

export default function LoginPerdeuform() {
  const [state, action] = useFormState(PasswordLost, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <>
      <form className={styles.form} action={action}>
        <Input label="Usuário / Email" name="login" type="text" />
        <input
          type="hidden"
          name="url"
          value={`${window.location.href.replace("perdeu", "resetar")}`}
        />

        <ErrorMessage error={state.error} />
        {state.ok ? (
          <p className={styles["perdeu-text-email"]}>Email enviado!</p>
        ) : (
          <FormButton />
        )}
      </form>
    </>
  );
}
