export type FetchPizzaArg = {
    order: string;
    sortBy: string;
    byCategory: string;
    search: string;
    currentPage: number;
  };
  export type Pizza = {
    id: string;
    title: string;
    type: number;
    size: number;
    price: number;
    count: number;
    imageUrl: string;
  };