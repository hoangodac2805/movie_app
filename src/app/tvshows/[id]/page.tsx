import Container from "@/components/Container";
import Detail from "@/components/Detail";
import { TvApi } from "@/services/tvApi";
import { TvDetailType } from "@/types/TvType";
import { notFound } from "next/navigation";

const fetchTvShow = async (id: number): Promise<TvDetailType | undefined> => {
  try {
    const { data, status } = await TvApi.getDetail(id);
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
  console.log(tvshow);
  return (
    <main>
      <Container>
        <Detail
          backdrop_path={process.env.imgHost + tvshow.backdrop_path}
          overview={tvshow.overview}
          poster_path={tvshow.poster_path}
          tagline={tvshow.tagline}
          vote={tvshow.vote_average}
          title={tvshow.name}
          type="TV Shows"
          inforTable={{
            type: { label: "Type", value: "TV Shows" },
            status: { label: "Status", value: tvshow.status },
            firstairdate: {
              label: "First air date",
              value: tvshow.first_air_date,
            },
            lastairdate: {
              label: "Last air date",
              value: tvshow.last_air_date,
            },
            seasons: {
              label: "No. of Seasons",
              value: tvshow.number_of_seasons,
            },
            episodes: {
              label: "No. of episodes",
              value: tvshow.number_of_episodes,
            },
            epsruntime: {
              label: "Episode run time",
              value: tvshow.episode_run_time
                .map((item) => item + " min")
                .join(", "),
            },
            genres: {
              label: "Genres",
              value: tvshow.genres.map((item) => item.name).join(", "),
            },
          }}
        />
      </Container>
    </main>
  );
}
