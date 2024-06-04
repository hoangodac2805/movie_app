import { ResWithPaginateType } from "@/types/CommonType"
import { baseApi } from "./baseApi"
import { MovieSearchType } from "@/types/MovieType"
import { SEARCH_ENDPOINT } from "../endpoint"
import { TvSearchType } from "@/types/TvType"

const Movie = async ({ query = "" }: { query?: string } = {}) => {
    return baseApi.get<ResWithPaginateType<MovieSearchType>>(SEARCH_ENDPOINT.MOVIE, {
        params: { query }
    });
}
const TV = async ({ query = "" }: { query?: string } = {}) => {
    return baseApi.get<ResWithPaginateType<TvSearchType>>(SEARCH_ENDPOINT.TV, {
        params: { query }
    });
}


export default {
    Movie, TV
}