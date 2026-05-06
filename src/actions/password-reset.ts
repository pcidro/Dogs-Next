"use server";

import { PASSWORD_RESET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { redirect } from "next/navigation";

type stateProps = {
  ok: boolean;
  error: string;
  data: string | null;
};

export default async function PasswordReset(
  state: stateProps,
  formData: FormData,
) {
  const login = formData.get("login") as string | null;
  const key = formData.get("key") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!login || !key || !password) {
      throw new Error("Preencha os dados");
    }

    if (password?.length < 6) {
      throw new Error("Senha deve ser maior que 6 digitos");
    }
    const { url } = PASSWORD_RESET();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Não autorizado");
    }
  } catch (error: unknown) {
    return apiError(error);
  }
  redirect("/login");
}
