import { MovieDetailType } from "@/types/MovieType";
import { baseApi } from "./baseApi";

class moviesApi extends baseApi {
  constructor() {
    super();
  }
  getDetail = (id: number) => {
    return this.get<MovieDetailType>(`movie/${id}`);
  };
}

export const MoviesApi = new moviesApi();
