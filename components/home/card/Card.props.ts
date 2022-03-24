interface CardPropsPrimitive {
  id: number;
  image: string;
  title: string;
  price: number;
}

interface CardPropsArray {
  types: Array<{ id: number; text: string }>;
  sizes: Array<{ id: number; text: string }>;
}

export interface CardPropsItem extends CardPropsPrimitive, CardPropsArray {}
