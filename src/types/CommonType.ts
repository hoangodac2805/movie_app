export interface IPaginate {
  page: number;
  total_pages: number;
  total_results: number;
}
export type ResWithPaginateType<D> = IPaginate & { results: Array<D> };
export enum MEDIATYPE {
  MOVIE = "movie",
  TV = "tv",
}

export interface IBTCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
export interface IGenres {
  id: number;
  name: string;
}
export interface IPCTCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface IPCTCountry {
  iso_3166_1: string;
  name: string;
}
export interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface ICreatedBy {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string | null;
}

export interface ILastEpToAir {
  id: number;
  overview: string;
  name: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string | number;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}

export interface INetwork {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ISeason {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}
