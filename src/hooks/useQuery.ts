import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { TrendingApi } from "@/services/api"

export const QueryTrendingAll = (page: number) => {
    return useQuery({
        queryKey: ["trending-all", page],
        queryFn: () => TrendingApi.GetAll({ page }),
        placeholderData: keepPreviousData,
        staleTime: 1000 * 60 * 60
    })
}


