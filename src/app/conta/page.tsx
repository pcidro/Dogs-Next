"use client";

import { useUser } from "@/context/usercontext";
import React from "react";

export default function ContaPage() {
  const { user } = useUser();
  console.log(user);
  return (
    <div>
      <h1>Conta {user?.nome}</h1>
    </div>
  );
}
