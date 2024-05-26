import { MoviesApi } from "@/services/moviesApi";
import { MovieDetailType } from "@/types/MovieType";
import { notFound } from "next/navigation";

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
  return <div>My Movie: {movie.title}</div>;
}
