"use client";
import Container from "@/components/Container";
import styles from "@/styles/pages/_top.module.scss";
import Search from "@/components/Search";
import ListWrapper from "@/components/ListWrapper";
import Card from "@/components/Card";
import { TrendingApi } from "@/services/trendingApi";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("")
    const { data, isLoading, isError } = useQuery({
        queryKey: ["trending-movies"],
        queryFn: () => TrendingApi.movies(),
        staleTime: 1000 * 60 * 60
    })

    const renderCard = () => {
        if (isLoading) return (<p>.....Loading</p>)
        if (isError) return (<p>Error</p>)

        return data?.data.results.map((t) => {
            let poster = process.env.imgHost + t.poster_path;
            let link = `movies/${t.id}`;
            return (
                <Card
                    key={t.id}
                    link={link}
                    poster={poster}
                    title={t.title}
                    vote={Number(t.vote_average.toFixed(1))}
                />
            );
        })
    }
    return (
        <main className={styles.top}>
            <Container>
                <p>MaileHereko</p>
                <h1 className="c-pageHeading">Movies</h1>
                <Search setValue={setSearchQuery} />
                <div className="c-total">
                    <span className="c-heading3">All</span>
                    <span className="c-bodyRegular">({isLoading ? 'loading' : data?.data.results.length})</span>
                </div>
                <ListWrapper>
                    {renderCard()}
                </ListWrapper>
            </Container>
        </main>
    );
}
