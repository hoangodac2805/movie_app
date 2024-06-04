import { TvDetailType } from "@/types/TvType"
import { baseApi } from "./baseApi"
import { TV_ENDPOINT } from "../endpoint"

const GetDetail = async (id: number) => {
    return await baseApi.get<TvDetailType>(TV_ENDPOINT.DETAIL(id))
}

export default {
    GetDetail
}