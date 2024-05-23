import Image from "next/image";
import Container from "@/components/Container";
import styles from "@/styles/pages/_top.module.scss";
import Search from "@/components/Search";
export default function Home() {
  return (
    <main className={styles.top}>
      <Container>
        <h1 className="c-pageHeading">MaileHereko</h1>
        <p className={styles.top_headingSub}>
          List of movies and TV Shows, I, <span>Pramod Poudel</span> have
          watched till date.
          <br /> Explore what I have watched and also feel free to make a
          suggestion. 😉
        </p>
        <Search/>
      </Container>
    </main>
  );
}
