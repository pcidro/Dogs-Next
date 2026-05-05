"use server";

import { USER_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import Login from "./login";
import { isValidEmail } from "@/functions/IsvalidEmail";

type stateProps = {
  ok: boolean;
  error: string;
  data: string | null;
};

export default async function UserPost(state: stateProps, formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;
  const email = formData.get("email") as string | null;

  try {
    if (!username || !password || !email) {
      throw new Error("Preencha os dados");
    }
    if (password?.length < 6) {
      throw new Error("A senha deve ter mais de 6 digitos");
    }
    if (!isValidEmail(email)) {
      throw new Error("Email inválido");
    }
    const { url } = USER_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Email ou usuário já existem");
    }
    const { ok } = await Login({ ok: true, error: "", data: null }, formData);
    if (!ok) {
      throw new Error("Erro ao logar");
    }

    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
