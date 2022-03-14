export type CardProps = {
  id: number;
  image: string;
  title: string;
  types: Array<{ id: number; text: string }>;
  sizes: Array<{ id: number; text: string }>;
  price: number;
};
