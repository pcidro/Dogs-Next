import ContaPhotoPost from "@/components/conta/conta-photo-post";
import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Postar | Dogs",
};

export default async function PostarPage() {
  return <ContaPhotoPost />;
}
