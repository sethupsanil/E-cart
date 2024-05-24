import { highlights } from "./ProductItem.interface";

export interface ProductDescriptionProps {
  productDescription: highlights[];
  title: string;
  scrollHandler: () => void;
}
