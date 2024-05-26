import { TrendingType } from "@/types/TrendingType";
import { baseApi } from "./baseApi";
import { ResWithPaginateType } from "@/types/CommonType";

class trendingApi extends baseApi {
  constructor() {
    super();
  }
  getAll = (query = "") => {
    return this.get<ResWithPaginateType<TrendingType>>(
      `trending/all/week${query}`
    );
  };
}

export const TrendingApi = new trendingApi();
