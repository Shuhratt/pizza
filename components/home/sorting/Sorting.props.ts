import { Dispatch, SetStateAction } from "react";

export type SortingProps = {
  list: Array<{ id: number; text: string }>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIdSortLabel: Dispatch<SetStateAction<number>>;
  className?: string;
};
