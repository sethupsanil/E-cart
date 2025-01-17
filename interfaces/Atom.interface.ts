import { FormikErrors, FormikTouched } from "formik";
import { KeyboardTypeOptions } from "react-native";

export interface CustomButtonProps {
  title: string;
  containerStyles?: any;
  textStyles?: any;
  isLoading?: boolean;
  isDisabled?: boolean;
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

export interface FloatingTextInputProps {
  label: string;
  text?: string;
  titleActiveSize?: number;
  titleInActiveSize?: number;
  showBorder?: boolean;
  titleActiveColor?: string;
  titleInactiveColor?: string;
  containerClass?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  value?: any;
  errors?: FormikErrors<any>;
  touched?: FormikTouched<any>;
  formikKey?: string;
  maxLength?: number;
  onChangeText?: (text: string) => void;
  onBlur?: (name?: any) => void;
}
