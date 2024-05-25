export interface CustomButtonProps {
  title: string;
  containerStyles?: any;
  textStyles?: any;
  isLoading?: boolean;
  darkBackgroundColor?: string;
  lightBackgroundColor?: string;
  lightBorder?: string;
  darkBorder?: string;
  handlePress?: () => void;
}

export interface ShareOptionProps {
  title: string;
  message: string;
  url?: string;
}

export interface CustomViewProps {
  className?: string;
  lightBorder?: string;
  darkBorder?: string;
  lightShadow?: string;
  darkShadow?: string;
}
