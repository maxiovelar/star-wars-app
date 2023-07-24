export interface State {
  currentPage: number;
  isLoading: boolean;
}

export type Action =
  | { type: "SET_CURRENT_PAGE"; payload: number }
  | { type: "SET_IS_LOADING"; payload: boolean };

export interface CardProps {
  image?: string;
  children: React.ReactNode;
}

export interface ContainerProps {
  children: ReactNode;
}

export interface Film {
  title: string;
  episode_id: number;
  release_date: string;
  director: string;
}

export interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
}

export interface Planet {
  name: string;
  diameter: string;
  climate: string;
  population: string;
}

export interface Species {
  name: string;
  classification: string;
  designation: string;
  language: string;
}

export interface Starship {
  name: string;
  starship_class: string;
}

export interface Vehicle {
  name: string;
  vehicle_class: string;
}

export type CollectionType =
  | "planets"
  | "starships"
  | "vehicles"
  | "people"
  | "films"
  | "species";

export interface PaginationProps {
  count: number;
  collection: CollectionType;
}

export interface QueryResponse {
  data: {
    count: number;
    next: string;
    previous: string;
    results: ItemType[];
  };
  collection: CollectionType;
}
