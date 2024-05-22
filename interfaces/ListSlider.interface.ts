export interface ListSliderProps {
  title: string;
  subTitle: string;
  data: any[];
  renderItem?: any;
  showTitle?: boolean;
  showSubTitle?: boolean;
  onItemPressed?: () => void;
  onSubTitlePressed?: () => void;
}
