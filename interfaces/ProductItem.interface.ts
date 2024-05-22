export interface ProductItem {
  id: number;
  name: string;
  price: number;
  actualPrice: number;
  image: string[];
  category: string;
  countInStock: number;
  deliveryETA: string;
  highlights: highlights[];
  productDetails: highlights[];
  selectionType: "size" | "unit";
  unitList?: sizeList[];
  sizeList?: sizeList[];
  isFeatured: boolean;
}
export interface highlights {
  title: string;
  description: string;
}
export interface sizeList {
  id: number;
  size: string;
  price: number;
  offerPrice?: number;
  countInStock: number;
}

export interface ProductItemProps {
  data: ProductItem;
}
