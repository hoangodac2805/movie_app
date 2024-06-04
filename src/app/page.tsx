"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import loadingCard from "@/assets/img/loadingCard.svg";
import styles from "./_top.module.scss";
import Container from "@/components/Container";
import Search from "@/components/Search";
import ListWrapper from "@/components/ListWrapper";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { QueryTrendingAll } from "@/hooks/useQuery";
import { MEDIATYPE } from "@/enums/media";

export default function Home() {
  const router = useRouter();
  const [filter, setFilter] = useState<MEDIATYPE | "all">("all");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, isFetching } = QueryTrendingAll(page);

  const dataRender = useMemo(() => {
    if (!data || isError) return [];
    switch (filter) {
      case MEDIATYPE.MOVIE:
        return data.data.results.filter(
          (t) => t.media_type === MEDIATYPE.MOVIE
        );
      case MEDIATYPE.TV:
        return data.data.results.filter((t) => t.media_type === MEDIATYPE.TV);
      default:
        return data.data.results;
    }
  }, [data, filter, isError]);

  const filterLabel = useMemo(() => {
    switch (filter) {
      case MEDIATYPE.MOVIE:
        return "Movies";
      case MEDIATYPE.TV:
        return "TV Shows";
      default:
        return "All";
    }
  }, [filter]);

  const renderCard = () => {
    if (isLoading || isFetching)
      return Array(8)
        .fill(0)
        .map((item, index) => (
          <Image key={index} src={loadingCard} alt="loadingCard" />
        ));
    if (isError) return <p>Error</p>;

    return dataRender.map((t) => {
      let poster = t.poster_path
        ? process.env.imgHost + t.poster_path
        : "/images/noposter.jpg";
      let title = t.media_type === MEDIATYPE.MOVIE ? t.title : t.name;
      let link =
        t.media_type === MEDIATYPE.MOVIE ? `movies/${t.id}` : `tvshows/${t.id}`;
      return (
        <Card
          key={t.id}
          link={link}
          poster={poster}
          title={title}
          vote={t.vote_average ? Number(t.vote_average.toFixed(1)) : 0}
        />
      );
    });
  };

  const handleSubmit = (value: string) => {
    router.push(`suggest?query=${value}`);
  };

  return (
    <main className={styles.top}>
      <Container>
        <Heading sizes="h1">MaileHereko</Heading>
        <p className={styles.top_headingSub}>
          List of movies and TV Shows, I, <span>Pramod Poudel</span> have
          watched till date.
          <br /> Explore what I have watched and also feel free to make a
          suggestion. 😉
        </p>
        <Search handleSubmit={handleSubmit} />
        <div className={styles.top_filter}>
          <div
            onClick={() => {
              setFilter("all");
            }}
            className={filter === "all" ? styles.btn_active : undefined}
          >
            All
          </div>
          <div
            onClick={() => {
              setFilter(MEDIATYPE.MOVIE);
            }}
            className={
              filter === MEDIATYPE.MOVIE ? styles.btn_active : undefined
            }
          >
            Movies
          </div>
          <div
            onClick={() => {
              setFilter(MEDIATYPE.TV);
            }}
            className={filter === MEDIATYPE.TV ? styles.btn_active : undefined}
          >
            TV Shows
          </div>
        </div>
        <div className={styles.total}>
          <span className={styles.total_label}>{filterLabel}</span>
          <span className={styles.total_number}>
            ( {isLoading ? "Loading" : dataRender.length})
          </span>
        </div>
        <ListWrapper>{renderCard()}</ListWrapper>
        <div className={styles.pagination}>
          <p
            className={styles.pagination_btn}
            onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            {" "}
            &#x2039;
          </p>
          <p className={styles.pagination_page}> {page}</p>
          <p
            className={styles.pagination_btn}
            onClick={() => setPage((prev) => prev + 1)}
          >
            &#8250;
          </p>
        </div>
      </Container>
    </main>
  );
}
