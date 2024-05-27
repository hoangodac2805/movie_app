import { TrendingType } from "@/types/TrendingType";
import { baseApi } from "./baseApi";
import { ResWithPaginateType } from "@/types/CommonType";
import { MovieSearchType, MovieTrendingType } from "@/types/MovieType";
import { TvTreadingType } from "@/types/TvType";

class trendingApi extends baseApi {
  constructor() {
    super();
  }
  getAll = async (query = "") => {
    return await this.get<ResWithPaginateType<TrendingType>>(
      `trending/all/week${query}`
    );
  };
  movies = async (query = "") => {
    return await this.get<ResWithPaginateType<MovieTrendingType>>(
      `trending/movie/week${query}`
    );
  };
  tv = async (query = "") => {
    return await this.get<ResWithPaginateType<TvTreadingType>>(
      `trending/tv/week${query}`
    );
  };
}

export const TrendingApi = new trendingApi();
