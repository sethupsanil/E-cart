export interface CategoryListProps {
  data: CategoryData[];
  title: string;
}

export interface CategoryData {
  category: string;
  id: number;
  image: string;
}
