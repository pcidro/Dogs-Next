"use server";

import apiError from "@/functions/api-error";
import { STATS_GET } from "@/functions/api";
import { Photo } from "./photos-get";
import { cookies } from "next/headers";

export type StatsData = {
  id: number;
  title: string;
  acessos: string;
};

export type PhotoData = {
  photo: Photo;
  comments: Comment[];
};
export default async function statsGet() {
  try {
    const token = cookies().get("token")?.value;
    if (!token) {
      throw new Error("Acesso negado");
    }
    const { url } = STATS_GET();
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
      next: {
        revalidate: 5,
      },
    });
    if (!response.ok) throw new Error("Erro ao buscar statisticas.");
    const data = (await response.json()) as StatsData[];
    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
