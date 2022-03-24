import { Dispatch, SetStateAction } from "react";
type SortingPropClass = {
  className?: string;
};
export type SortingProps = {
  list: Array<{ id: number; text: string }>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIdSortLabel: Dispatch<SetStateAction<number>>;
} & SortingPropClass;
