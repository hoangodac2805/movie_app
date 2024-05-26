import { MovieTrendingType } from "@/types/MovieType";
import { TrendingType } from "@/types/TrendingType";
import { TvTreadingType } from "@/types/TvType";
import { create } from "zustand";
interface IState {
  all: Array<TrendingType>;
  movies: Array<MovieTrendingType>;
  tv: Array<TvTreadingType>;
}
interface IAction {
  setAll: (data: Array<TrendingType>) => void;
  setMovies: (data: Array<MovieTrendingType>) => void;
}

const TrendingStore = create<IState & IAction>((set, get) => ({
  all: [],
  movies: [],
  tv: [],
  setAll: (data: Array<TrendingType>) => set({ all: [...data] }),
  setMovies: (data: Array<MovieTrendingType>) => set({ movies: [...data] }),
  setTv: (data: Array<TvTreadingType>) => set({ tv: [...data] }),
}));

export default TrendingStore;
