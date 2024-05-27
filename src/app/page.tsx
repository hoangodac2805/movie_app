"use client";
import Container from "@/components/Container";
import styles from "@/styles/pages/_top.module.scss";
import Search from "@/components/Search";
import ListWrapper from "@/components/ListWrapper";
import Card from "@/components/Card";
import { TrendingApi } from "@/services/trendingApi";
import { MEDIATYPE } from "@/types/CommonType";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState<MEDIATYPE | "all">("all")
  const { data, isLoading, isError } = useQuery({
    queryKey: ["trending-all"],
    queryFn: () => TrendingApi.getAll(),
    staleTime: 1000 * 60 * 60
  })
  const dataRender = useMemo(() => {
    if (!data || isError) return [];
    switch (filter) {
      case MEDIATYPE.MOVIE:
        return data.data.results.filter((t) => t.media_type === MEDIATYPE.MOVIE);
        break;
      case MEDIATYPE.TV:
        return data.data.results.filter((t) => t.media_type === MEDIATYPE.TV);
        break;
      default:
        return data.data.results;
        break;
    }
  }, [data, filter, searchQuery, isError, isLoading])

  const totalItem = useMemo(() => {
    return dataRender.length;
  }, [dataRender])

  const renderCard = () => {
    if (isLoading) return (<p>.....Loading</p>)
    if (isError) return (<p>Error</p>)

    return dataRender.map((t) => {
      let poster = process.env.imgHost + t.poster_path;
      let title = t.media_type === MEDIATYPE.MOVIE ? t.title : t.name;
      let link =
        t.media_type === MEDIATYPE.MOVIE
          ? `movies/${t.id}`
          : `tvshows/${t.id}`;
      return (
        <Card
          key={t.id}
          link={link}
          poster={poster}
          title={title}
          vote={Number(t.vote_average.toFixed(1))}
        />
      );
    })
  }
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
        <Search setValue={setSearchQuery} />
        <div className={styles.top_filter}>
          <div onClick={() => {
            setFilter("all")
          }} className={filter === "all" ? styles.btn_active : undefined}>All</div>
          <div onClick={() => {
            setFilter(MEDIATYPE.MOVIE)
          }} className={filter === MEDIATYPE.MOVIE ? styles.btn_active : undefined}>Movies</div>
          <div onClick={() => {
            setFilter(MEDIATYPE.TV)
          }} className={filter === MEDIATYPE.TV ? styles.btn_active : undefined}>TV Shows</div>
        </div>
        <div className="c-total">
          <span className="c-heading3">All</span>
          <span className="c-bodyRegular">( {isLoading ? "Loading" : totalItem})</span>
        </div>
        <ListWrapper>
          {renderCard()}
        </ListWrapper>
      </Container>
    </main>
  );
}
