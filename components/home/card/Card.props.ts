export type CardPropsItem = {
  types: Array<{ id: number; text: string }>;
  sizes: Array<{ id: number; text: string }>;
  id: number;
  image: string;
  title: string;
  price: number;
}
