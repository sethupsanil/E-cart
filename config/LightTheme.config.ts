import Colors from "@CONSTANTS/Colors";
import { Theme } from "@react-navigation/native";

const Light: Theme = {
  dark: false,
  colors: {
    ...Colors.light,
  },
};

export default Light;

// primary: Colors.light.primary,
// background: "rgb(255, 255, 255)",
// card: "rgb(255, 255, 255)",
// text: "rgb(255, 255, 255)",
// border: "rgb(216, 216, 216)",
// notification: "rgb(255, 59, 48)",
