export interface BestSellersInterface {
  id: number;
  title: string;
  products: Product[];
  totalCount: number;
}
export interface Product {
  id: number;
  title: string;
  image: string;
}

export interface BestSellersProps {
  data: BestSellersInterface;
}
