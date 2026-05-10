"use client";

import React from "react";
import styles from "./photo-comments.module.css";
import { useUser } from "@/context/usercontext";
import PhotoCommentsForm from "./photo-comments-form";
import { Comment } from "@/actions/photo-get";

type PhotoCommentsProps = {
  single: boolean;
  id: number;
  comments: Comment[];
};

export const PhotoComments = ({ single, id, comments }: PhotoCommentsProps) => {
  const [photoComments, setComments] = React.useState(() => comments);

  const commentsSection = React.useRef<HTMLUListElement>(null);
  const { user } = useUser();

  React.useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [photoComments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : ""}`}
      >
        {photoComments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {user && (
        <PhotoCommentsForm single={single} id={id} setComments={setComments} />
      )}
    </>
  );
};
