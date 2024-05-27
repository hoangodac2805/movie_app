import { baseApi } from "./baseApi";
import { TvDetailType } from "@/types/TvType";

class tvApi extends baseApi {
  constructor() {
    super();
  }
  getDetail = (id: number) => {
    return this.get<TvDetailType>(`tv/${id}`);
  };
}

export const TvApi = new tvApi();
