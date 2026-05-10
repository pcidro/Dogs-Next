"use server";

import apiError from "@/functions/api-error";
import { TOKEN_VALIDATE_POST } from "@/functions/api";
import { Photo } from "./photos-get";
import { cookies } from "next/headers";

export type PhotoData = {
  photo: Photo;
  comments: Comment[];
};
export default async function ValidateToken() {
  try {
    const token = cookies().get("token")?.value;
    if (!token) {
      throw new Error("Acesso negado");
    }
    const { url } = TOKEN_VALIDATE_POST();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) throw new Error("Erro validar token.");
    const data = await response.json();
    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
