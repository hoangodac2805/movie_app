"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import loadingCard from "@/assets/img/loadingCard.svg"
import styles from "./_index.module.scss";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import Container from "@/components/Container";
import Search from "@/components/Search";
import ListWrapper from "@/components/ListWrapper";
import Card from "@/components/Card";
import { TrendingApi } from "@/services/api";

const fetchMovies = async ({ pageParam }: { pageParam: number }) => {
    const { data } = await TrendingApi.Movies({ page: pageParam });
    return data.results;
}

export default function Home() {
    const { ref, inView } = useInView();
    const router = useRouter();
    const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ["trending-movies"],
        queryFn: fetchMovies,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.length ? allPages.length + 1 : undefined;
            return nextPage;
        },
    })
    const renderCard = () => {
        return data?.pages.map((movies) => {
            return movies.map((t) => {
                let poster = t.poster_path ? process.env.imgHost + t.poster_path : "/images/noposter.jpg";
                let link = `movies/${t.id}`;
                return (
                    <Card
                        key={t.id}
                        link={link}
                        poster={poster}
                        title={t.title}
                        vote={t.vote_average ? Number(t.vote_average.toFixed(1)) : 0}
                    />
                );
            })

        })
    }
    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);
    const handleSubmit = (value: string) => {
        router.push(`suggest?query=${value}`)
    }
    return (
        <main className={styles.movies}>
            <Container>
                <p>MaileHereko</p>
                <h1 className={styles.movies_heading}>Movies</h1>
                <Search handleSubmit={handleSubmit} />
                <div className={styles.total}>
                    <span className={styles.total_label}>All</span>
                </div>
                <ListWrapper>
                    {isLoading ? Array(8).fill(0).map((item, index) => (<Image key={index} src={loadingCard} alt="loadingCard" />)) : renderCard()}
                    {isFetchingNextPage &&
                        Array(8).fill(0).map((item, index) => (<Image key={index} src={loadingCard} alt="loadingCard" />))}
                </ListWrapper>
                <div ref={ref}></div>
            </Container>
        </main>
    );
}
