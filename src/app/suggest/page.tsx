'use client'
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from 'next/navigation';
import loadingCard from "@/assets/img/loadingCard.svg";
import styles from "./_index.module.scss";
import Container from "@/components/Container";
import Search from "@/components/Search";
import ListWrapper from "@/components/ListWrapper";
import CardSuggest from "@/components/CardSuggest";
import { MEDIATYPE } from "@/enums/media";
import SuggestStore, { SuggestType } from "@/stores/SuggestStore";
import { SearchApi } from "@/services/api";

const searchFunction = async (query: string) => {
    const [movies, tvShows] = await Promise.all([
        SearchApi.Movie({ query }),
        SearchApi.TV({ query })
    ]);
    const result: Array<SuggestType> = [];
    movies.data.results.forEach(item => {
        result.push({ ...item, media_type: MEDIATYPE.MOVIE });
    });
    tvShows.data.results.forEach(item => {
        result.push({ ...item, media_type: MEDIATYPE.TV });
    });
    return result;
};

function SearchResults() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const suggestStore = SuggestStore();
    const [loading, setLoading] = useState(!!searchParams.get('query')?.trim());

    const renderCard = () => {
        if (loading) {
            return Array(8).fill(0).map((_, index) => (
                <Image key={index} src={loadingCard} alt="loadingCard" />
            ));
        }

        if (searchParams.get('query')?.trim() && suggestStore.all.length === 0) {
            return (
                <div className={styles.top_noresults}>
                    <h2>Sorry, No results found</h2>
                    <p>There are no movies or TV shows matching your search terms.</p>
                </div>
            );
        }

        return suggestStore.all.map((t) => {
            const poster = t.poster_path ? process.env.imgHost + t.poster_path : "/images/noposter.jpg";
            const title = t.media_type === MEDIATYPE.MOVIE ? t.title : t.name;
            const link = t.media_type === MEDIATYPE.MOVIE ? `movies/${t.id}` : `tvshows/${t.id}`;

            return (
                <CardSuggest
                    key={t.id}
                    link={link}
                    poster={poster}
                    title={title}
                    vote={t.vote_average ? Number(t.vote_average.toFixed(1)) : 0}
                    suggestProcess={suggestStore.getSuggestProcess(t.id)}
                    suggestAction={() => suggestStore.onSuggest(t.id)}
                />
            );
        });
    };

    const handleSubmit = (value: string) => {
        if (value.trim() !== '') {
            router.push(`suggest?query=${value}`);
        }
    };

    useEffect(() => {
        const query = searchParams.get('query');
        if (query?.trim()) {
            (async () => {
                setLoading(true);
                try {
                    const queryResult = await searchFunction(query);
                    suggestStore.setAll(queryResult);
                } catch {
                    suggestStore.setAll([]);
                } finally {
                    setLoading(false);
                }
            })();
        } else {
            suggestStore.setAll([]);
        }
    }, [searchParams]);

    return (
        <>
            <Search defaultValue={searchParams.get('query') || ''} withButton handleSubmit={handleSubmit} />
            <p className={styles.suggest_heading}>&nbsp;</p>
            <ListWrapper>
                {renderCard()}
            </ListWrapper>
        </>
    );
}

export default function Page() {
    return (
        <main>
            <Container>
                <h1 className={styles.suggest_heading}>Movies</h1>
                <p className={styles.suggest_headingSub}>
                    I will really appreciate it if you take time to suggest me something good to watch.
                </p>
                <Suspense>
                    <SearchResults />
                </Suspense>
            </Container>
        </main>
    );
}
