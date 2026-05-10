"use client";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./photocommentsform.module.css";
import EnviarIcon from "@/icons/enviarIcon";
import { Comment } from "@/actions/photo-get";
import ErrorMessage from "../helper/error-message";
import commentPost from "@/actions/comment-post";
import { useEffect, useState } from "react";

type photoCommentsFormProps = {
  single: boolean;
  id: number;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
};

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={styles.button}>
      <EnviarIcon />
    </button>
  );
}

export default function PhotoCommentsForm({
  single,
  id,
  setComments,
}: photoCommentsFormProps) {
  const [state, action] = useFormState(commentPost, {
    ok: false,
    data: null,
    error: "",
  });

  const [comment, setComment] = useState("");

  useEffect(() => {
    if (state.ok && state.data) {
      setComments((comments) => [...comments, state.data]);
      setComment("");
    }
  }, [state, setComments]);
  return (
    <form
      action={action}
      className={`${styles.form} ${single ? styles.single : ""}`}
    >
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className={styles.textarea}
        placeholder="Comente..."
        name="comment"
        id="comment"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <FormButton />
      <ErrorMessage error={state.error} />
    </form>
  );
}
