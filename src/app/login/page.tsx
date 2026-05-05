import Loginform from "@/components/login/loginform";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Dogs",
  description: "Faça o login no site Dogs",
};

export default async function LoginPage() {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <Loginform />
    </section>
  );
}
