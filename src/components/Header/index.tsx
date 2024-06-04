import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./_header.module.scss";
import logo from "@/assets/img/logo.svg";
import Container from "@/components/Container";
const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <Container>
      <Link href={"/"}>
        <Image src={logo} alt="logo" />
      </Link>
      <div className={styles.nav}>
        <Link href={"/movies"} className={styles.nav_link}>
          Movies
        </Link>
        <Link href={"/tvshows"} className={styles.nav_link}>
          TV Shows{" "}
        </Link>
        <Link href={"/suggest"} className={styles.nav_link}>
          Suggest me
        </Link>
      </div>
      </Container>
    </header>
  );
};

export default Header;
