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
