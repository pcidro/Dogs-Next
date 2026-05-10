"use client";

import React from "react";
import MinhasFotosICon from "@/icons/minhasFotosIcon";
import EstatisticasICon from "@/icons/estatisticasIcon";
import AdicionarICon from "@/icons/adicionarIcon";
import SairICon from "@/icons/sairIcon";
import styles from "./conta-header.module.css";
import useMedia from "@/hooks/useMedia";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logout from "@/actions/logout";
import { useUser } from "@/context/usercontext";

function getTitle(pathname: string) {
  switch (pathname) {
    case "/conta/postar":
      return "Poste Sua foto";
    case "/conta/estatisticas":
      return "Estatisticas";
    default:
      return "Minha conta";
  }
}

export default function ContaHeader() {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const pathname = usePathname();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const { setUser } = useUser();

  async function handleLogout() {
    await logout();
    setUser(null);
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link href="/conta" className={pathname === "/conta" ? "active" : ""}>
          <MinhasFotosICon />
          {mobile && "Minhas Fotos"}
        </Link>
        <Link
          href="/conta/estatisticas"
          className={pathname === "/conta/estatisticas" ? "active" : ""}
        >
          <EstatisticasICon />
          {mobile && "Estatísticas"}
        </Link>
        <Link
          href="/conta/postar"
          className={pathname === "/conta/postar" ? "active" : ""}
        >
          <AdicionarICon />
          {mobile && "Adicionar Foto"}
        </Link>
        <button onClick={handleLogout}>
          <SairICon />
          {mobile && "Sair"}
        </button>
      </nav>
    </header>
  );
}
