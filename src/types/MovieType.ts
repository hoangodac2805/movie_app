import {
  IBTCollection,
  IGenres,
  IPCTCompany,
  IPCTCountry,
  ISpokenLanguage,
  MEDIATYPE,
} from "./CommonType";

export type MovieDetailType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: IBTCollection;
  budget: number;
  genders: Array<IGenres>;
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: Array<string>;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<IPCTCompany>;
  production_countries: Array<IPCTCountry>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<ISpokenLanguage>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieTrendingType = Pick<
  MovieDetailType,
  | "backdrop_path"
  | "id"
  | "original_title"
  | "overview"
  | "poster_path"
  | "adult"
  | "title"
  | "original_language"
  | "popularity"
  | "release_date"
  | "video"
  | "vote_average"
  | "vote_count"
> & {
  media_type: MEDIATYPE.MOVIE;
  genre_ids: Array<number>;
};
