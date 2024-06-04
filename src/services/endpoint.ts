export const TRENDING_ENDPOINT = {
    ALL: 'trending/all/week',
    MOVIES: 'trending/movie/week',
    TV: 'trending/tv/week'
}

export const SEARCH_ENDPOINT = {
    MOVIE: 'search/movie',
    TV: 'search/tv'
}

export const MOVIE_ENDPOINT = {
    DETAIL: (id: number) => `movie/${id}`
}

export const TV_ENDPOINT = {
    DETAIL: (id: number) => `tv/${id}`
}

