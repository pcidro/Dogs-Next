"use client";
import photosGet, { Photo } from "@/actions/photos-get";
import FeedPhotos from "./feed-photos";
import { useEffect, useRef, useState } from "react";
import Loading from "../helper/loading";
import styles from "./feed.module.css";

export default function Feed({
  photos,
}: {
  photos: Photo[];
  user?: 0 | string;
}) {
  const [photosfeed, setPhotosFeed] = useState<Photo[]>(photos);
  const [loading, setLoading] = useState(false);
  const [infinite, setInfinite] = useState(photos.length < 6 ? false : true);
  const [page, setPage] = useState(1);

  const fetching = useRef(false);

  function infiniteScroll() {
    console.log("aconteceu");
    if (fetching.current) return;
    fetching.current = true;
    setLoading(true);
    setTimeout(() => {
      setPage((currentPage) => currentPage + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    if (page === 1) return;
    async function getPagePhotos(page: number) {
      const actionData = await photosGet(
        { page, total: 6, user: 0 },
        { cache: "no-store" },
      );
      if (actionData && actionData.data !== null) {
        const { data } = actionData;
        setPhotosFeed((currentPhotos) => [...currentPhotos, ...data]);
        if (data.length < 6) {
          setInfinite(false);
        }
      }
    }
    getPagePhotos(page);
  }, [page]);

  useEffect(() => {
    if (infinite) {
      window.addEventListener("scroll", infiniteScroll);
      window.addEventListener("wheel", infiniteScroll);
    } else {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    }

    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      <FeedPhotos photos={photosfeed} />
      <div className={styles.loadingWrapper}></div>
      {infinite ? (
        loading && <Loading />
      ) : (
        <p className={styles.noPosts}>Não existem mais postagens.</p>
      )}
    </div>
  );
}
