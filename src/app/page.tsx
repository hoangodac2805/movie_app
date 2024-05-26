"use client";
import Container from "@/components/Container";
import styles from "@/styles/pages/_top.module.scss";
import Search from "@/components/Search";
import ListWrapper from "@/components/ListWrapper";
import Card from "@/components/Card";
import { useEffect } from "react";
import { TrendingApi } from "@/services/trendingApi";
import { MEDIATYPE } from "@/types/CommonType";
import TrendingStore from "@/stores/TrendingStore";

export default function Home() {
  const trendingStore = TrendingStore();
  useEffect(() => {
    (async function () {
      try {
        let { data, status } = await TrendingApi.getAll();
        if (status === 200) {
          trendingStore.setAll(data.results);
        }
      } catch (error) {
        console.log(`error`, error);
      }
    })();
  }, []);

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
        <Search />
        <div className={styles.top_filter}>
          <div className={styles.btn_active}>All</div>
          <div>Movies</div>
          <div>TV Shows</div>
        </div>
        <div className="c-total">
          <span className="c-heading3">All</span>
          <span className="c-bodyRegular">(120)</span>
        </div>
        <ListWrapper>
          {trendingStore.all.map((t) => {
            let poster = "https://image.tmdb.org/t/p/w500" + t.poster_path;
            let title = t.media_type === MEDIATYPE.MOVIE ? t.title : t.name;
            let link =
              t.media_type === MEDIATYPE.MOVIE
                ? `movies/${t.id}`
                : `tv/${t.id}`;
            return (
              <Card
                key={t.id}
                link={link}
                poster={poster}
                title={title}
                vote={Number(t.vote_average.toFixed(1))}
              />
            );
          })}
        </ListWrapper>
      </Container>
    </main>
  );
}
