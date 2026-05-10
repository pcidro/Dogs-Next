import photosGet from "@/actions/photos-get";
import Feed from "@/components/feed/feed";
import React from "react";

export default async function Home() {
  const { data } = await photosGet();

  return (
    <section className="container mainContainer">
      {data && <Feed photos={data} />}
    </section>
  );
}
