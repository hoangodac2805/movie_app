import { baseApi } from "./baseApi";
import { ResWithPaginateType } from "@/types/CommonType";
import { MovieSearchType, MovieTrendingType } from "@/types/MovieType";

class searchApi extends baseApi {
  constructor() {
    super();
  }
   movie = async (query = "") => {
    return await this.get<ResWithPaginateType<MovieSearchType>>(
      `search/movie?query=${query}`
    );
  };
}

export const SearchApi = new searchApi();
