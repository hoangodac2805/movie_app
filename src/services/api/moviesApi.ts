import { MovieDetailType } from "@/types/MovieType"
import { MOVIE_ENDPOINT } from "../endpoint"
import { baseApi } from "./baseApi"

const GetDetail = async (id: number) => {
    return await baseApi.get<MovieDetailType>(MOVIE_ENDPOINT.DETAIL(id))
}

export default {
    GetDetail
}