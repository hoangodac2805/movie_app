import { TrendingType } from "@/types/TrendingType"
import { baseApi } from "./baseApi"
import { ResWithPaginateType } from "@/types/CommonType"
import { TRENDING_ENDPOINT } from "../endpoint"
import { MovieTrendingType } from "@/types/MovieType"
import { TvTrendingType } from "@/types/TvType"


const GetAll = async ({ page = 1 }: { page?: number } = {}) => {
    return await baseApi.get<ResWithPaginateType<TrendingType>>(TRENDING_ENDPOINT.ALL, {
        params: {
            page
        }
    })
}

const Movies = async ({ page = 1 }: { page?: number } = {}) => {
    return await baseApi.get<ResWithPaginateType<MovieTrendingType>>(TRENDING_ENDPOINT.MOVIES, {
        params: {
            page
        }
    })
}

const TV = async ({ page = 1 }: { page?: number } = {}) => {
    return await baseApi.get<ResWithPaginateType<TvTrendingType>>(TRENDING_ENDPOINT.TV, {
        params: {
            page
        }
    })
}


export default { GetAll, Movies, TV }