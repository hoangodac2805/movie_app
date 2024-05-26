import React from "react";
import styles from "@/styles/components/_header.module.scss";
import Container from "./Container";
import logo from "@/assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
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
        <Link href={"/tvshow"} className={styles.nav_link}>
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
