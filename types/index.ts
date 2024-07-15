import { ImageSourcePropType } from "react-native";

export interface onBoardType {
  id: string;
  image: ImageSourcePropType | undefined;
  title: string;
  subtitle: string;
}

export interface authFormValueType {
  email: string;
  password: string;
}

export interface otpFormValueType {
  otp_code: string;
}
