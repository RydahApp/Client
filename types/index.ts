import { ImageSourcePropType } from "react-native";

export interface onBoardType {
  id: string;
  image: ImageSourcePropType | undefined;
  title: string;
  subtitle: string;
}
