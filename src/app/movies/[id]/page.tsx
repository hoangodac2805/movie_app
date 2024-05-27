import Container from "@/components/Container";
import { MoviesApi } from "@/services/moviesApi";
import { MovieDetailType } from "@/types/MovieType";
import { notFound } from "next/navigation";
import Detail from "@/components/Detail";

const fetchMovie = async (id: number): Promise<MovieDetailType | undefined> => {
  try {
    const { data, status } = await MoviesApi.getDetail(id);
    if (status === 200) {
      return data;
    }
    return undefined;
  } catch (error) {
    return undefined;
  }
};

export default async function Page({ params }: { params: { id: number } }) {
  const movie = await fetchMovie(params.id);
  if (!movie) {
    notFound();
  }
  return (
    <main>
      <Container>
        <Detail
          backdrop_path={process.env.imgHost + movie.backdrop_path}
          overview={movie.overview}
          poster_path={movie.poster_path}
          tagline={movie.tagline}
          vote={movie.vote_average}
          title={movie.title}
          type="Movie"
          inforTable={{
            type: { label: "Type", value: "Movie" },
            release: { label: "Release Date:", value: movie.release_date },
            runtime: { label: "Run time:", value: movie.runtime + " min" },
            Genres: {
              label: "Genres",
              value: movie.genres.map((item) => item.name).join(", "),
            },
          }}
        />
      </Container>
    </main>
  );
}
