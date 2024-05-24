import { sizeList } from "./ProductItem.interface";

export interface SelectionBoxProps {
  props: sizeList[];
  onSelectedItemChanges: (index: number) => void;
}
export interface SelectionBox {
  item: any;
  index: number;
  selectedItem: number;
}
