export interface CategoryListProps {
  data: CategoryData[];
  title: string;
  containerClass?: any;
}

export interface CategoryData {
  category: string;
  id: number;
  image: string;
}
