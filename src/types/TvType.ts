import {
  ICreatedBy,
  IGenres,
  ILastEpToAir,
  INetwork,
  IPCTCompany,
  IPCTCountry,
  ISeason,
  ISpokenLanguage,
  MEDIATYPE,
} from "./CommonType";

export type TvDetailType = {
  adult: boolean;
  backdrop_path: string;
  created_by: Array<ICreatedBy>;
  episode_run_time: Array<number>;
  first_air_date: string;
  genres: Array<IGenres>;
  homepage: string;
  id: number;
  in_production: boolean;
  languages: Array<string>;
  last_air_date: string;
  last_episode_to_air: ILastEpToAir;
  name: string;
  next_episode_to_air: any | null;
  networks: Array<INetwork>;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<IPCTCompany>;
  production_countries: Array<IPCTCountry>;
  seasons: Array<ISeason>;
  spoken_languages: Array<ISpokenLanguage>;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

export type TvTreadingType = Pick<
  TvDetailType,
  | "backdrop_path"
  | "id"
  | "original_name"
  | "overview"
  | "poster_path"
  | "adult"
  | "name"
  | "original_language"
  | "popularity"
  | "first_air_date"
  | "vote_average"
  | "vote_count"
  | "origin_country"
> & {
  media_type: MEDIATYPE.TV;
  genre_ids: Array<number>;
};
