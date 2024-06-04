import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Detail from "@/components/Detail";
import { MovieDetailType } from "@/types/MovieType";
import { MoviesApi } from "@/services/api";

const fetchMovie = async (id: number): Promise<MovieDetailType | undefined> => {
  try {
    const { data, status } = await MoviesApi.GetDetail(id);
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
          type="movie"
          info={movie}
        />
      </Container>
    </main>
  );
}
