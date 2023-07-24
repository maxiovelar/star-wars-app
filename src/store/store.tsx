import React, { Dispatch, createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { type State, type Action } from "../../types";

interface StoreContextType {
  state: State;
  dispatch: Dispatch<Action>;
}

interface StoreProps {
  children: React.ReactNode;
}

export const initialState: State = {
  currentPage: 1,
  isLoading: false,
};

const store = createContext<StoreContextType>({
  state: initialState,
  dispatch: () => null,
});

const { Provider } = store;

const StateProvider = ({ children }: StoreProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
