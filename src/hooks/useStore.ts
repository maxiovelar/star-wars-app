import { store } from "../store/store";
import { useContext } from "react";

export const useStore = () => {
  const { state, dispatch } = useContext(store);
  const { currentPage, isLoading } = state;

  const setCurrentPage = (payload: number) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload });
  };

  const setIsLoading = (payload: boolean) => {
    dispatch({ type: "SET_IS_LOADING", payload });
  };

  return {
    currentPage,
    isLoading,
    setCurrentPage,
    setIsLoading,
  };
};
