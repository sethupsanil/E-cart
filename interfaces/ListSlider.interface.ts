export interface ListSliderProps {
  title: string;
  subTitle: string;
  data: any[];
  renderItem?: JSX.Element | any;
  hideTitle?: boolean;
  hideSubTitle?: boolean;
  onItemPressed?: () => void;
  onSubTitlePressed?: () => void;
}
