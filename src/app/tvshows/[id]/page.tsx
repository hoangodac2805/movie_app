import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Detail from "@/components/Detail";
import { TvDetailType } from "@/types/TvType";
import { TVApi } from "@/services/api";

const fetchTvShow = async (id: number): Promise<TvDetailType | undefined> => {
  try {
    const { data, status } = await TVApi.GetDetail(id);
    if (status === 200) {
      return data;
    }
    return undefined;
  } catch (error) {
    return undefined;
  }
};

export default async function Page({ params }: { params: { id: number } }) {
  const tvshow = await fetchTvShow(params.id);
  if (!tvshow) {
    notFound();
  }
  return (
    <main>
      <Container>
        <Detail
          type="tv"
          info={tvshow}
        />
      </Container>
    </main>
  );
}
