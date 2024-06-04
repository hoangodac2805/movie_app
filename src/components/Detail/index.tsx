import React from "react";
import Image from "next/image";
import styles from "./_detail.module.scss";
import star from "@/assets/img/star.svg";
import { MovieDetailType } from "@/types/MovieType";
import { TvDetailType } from "@/types/TvType";
interface IInfoTable {
  [key: string | number]: {
    label: string;
    value: string | number;
  };
}
type DetailProp =
  | { type: "movie"; info: MovieDetailType }
  | { type: "tv"; info: TvDetailType };

const Detail: React.FC<DetailProp> = ({ type, info }) => {
  const renderTable = () => {
    let inforTable: IInfoTable = {};
    if (type === "movie") {
      inforTable = {
        type: { label: "Type", value: "Movie" },
        release: { label: "Release Date:", value: info.release_date },
        runtime: { label: "Run time:", value: info.runtime + " min" },
        Genres: {
          label: "Genres",
          value: info.genres.map((item) => item.name).join(", "),
        },
      };
    } else {
      inforTable = {
        type: { label: "Type", value: "TV Shows" },
        status: { label: "Status", value: info.status },
        firstairdate: {
          label: "First air date",
          value: info.first_air_date,
        },
        lastairdate: {
          label: "Last air date",
          value: info.last_air_date,
        },
        seasons: {
          label: "No. of Seasons",
          value: info.number_of_seasons,
        },
        episodes: {
          label: "No. of episodes",
          value: info.number_of_episodes,
        },
        epsruntime: {
          label: "Episode run time",
          value: info.episode_run_time.map((item) => item + " min").join(", "),
        },
        genres: {
          label: "Genres",
          value: info.genres.map((item) => item.name).join(", "),
        },
      };
    }

    return (Object.keys(inforTable) as Array<keyof IInfoTable>).map((key) => (
      <li className={styles.detail_table_item} key={key}>
        <p className={styles.detail_table_item_label}>
          {inforTable[key].label}
        </p>
        <p className={styles.detail_table_item_value}>
          {inforTable[key].value}
        </p>
      </li>
    ));
  };
  const renderContent = () => {
    let backdrop_path = info.backdrop_path
      ? process.env.imgHost + info.backdrop_path
      : "/images/no_image.png";
    let title = type === "movie" ? info.title : info.name;
    let poster_path = info.poster_path
      ? process.env.imgHost + info.poster_path
      : "/images/noposter.jpg";
    let vote = info.vote_average ? Number(info.vote_average.toFixed(1)) : 0;

    return (
      <div className={styles.detail}>
        <figure className={styles.detail_banner}>
          <img src={backdrop_path} alt={title} />
        </figure>
        <div className={styles.detail_lead}>
          <p className={styles.detail_breadcrumb}>
            MaileHereko / {type === "movie" ? "Movie" : "TV Show"}{" "}
          </p>
          <p className={styles.detail_name}>{title}</p>
        </div>
        <div className={styles.detail_body}>
          <figure className={styles.detail_poster}>
            <img src={poster_path} alt={title} />
          </figure>
          <div className={styles.detail_info}>
            <p className={styles.detail_tagline}>{info.tagline}</p>
            <p className={styles.detail_overview}>{info.overview}</p>
            <div className={styles.detail_vote}>
              <Image width={16} height={16} src={star} alt="star" />
              <span>{vote}</span>
            </div>
            <ul className={styles.detail_table}>{renderTable()}</ul>
          </div>
        </div>
      </div>
    );
  };
  return <>{renderContent()}</>;
};

export default Detail;
