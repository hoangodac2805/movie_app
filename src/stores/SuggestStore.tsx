import { create } from "zustand";
import { SUGGESTPROCESS } from "@/enums/process";
import { MovieTrendingType } from "@/types/MovieType";
import { TvTrendingType } from "@/types/TvType";

export type SuggestType = TvTrendingType | MovieTrendingType;
interface SuggestList {
  id: number, process: SUGGESTPROCESS
}
interface IState {
  all: Array<SuggestType>;
}
interface IAction {
  setAll: (data: Array<SuggestType>) => void;
  getSuggestProcess: (id: number) => SUGGESTPROCESS;
  onSuggest: (id: number) => void
}

const SuggestStore = create<IState & IAction>((set, get) => ({
  all: [],
  setAll: (data) => set({ all: [...data] }),
  onSuggest: (id) => {
    const suggestList = localStorage.getItem('suggestList');
    let updateList: Array<SuggestList> = [];
    if (suggestList) {
      updateList = JSON.parse(suggestList);
    }
    const existingSuggestionIndex = updateList.findIndex((item) => item.id === id);
    if (existingSuggestionIndex === -1) {
      updateList.push({ id, process: SUGGESTPROCESS.ADDTOLIST });
    } else {
      const existingSuggestion = updateList[existingSuggestionIndex];
      if (existingSuggestion.process !== SUGGESTPROCESS.WATCHED) {
        existingSuggestion.process++;
        updateList[existingSuggestionIndex] = existingSuggestion;
      }
    }
    localStorage.setItem("suggestList", JSON.stringify(updateList));
    get().setAll([...get().all]);
  },
  getSuggestProcess: (id) => {
    const suggestList = localStorage.getItem('suggestList');
    if (!suggestList) {
      return SUGGESTPROCESS.SUGGEST
    } else {
      const found = (JSON.parse(suggestList) as Array<SuggestList>).find(
        (item) => item.id === id
      );
      return found ? found.process : SUGGESTPROCESS.SUGGEST;
    }
  }
}));

export default SuggestStore;
