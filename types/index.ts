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

export interface personalFormValueType {
  first_name: string;
  last_name: string;
  username: string;
  mobile_number: string;
  email: string;
  location: string;
}

export interface forgetFormValueType {
  email: string;
}

export interface resetFormValueType {
  password: string;
  confirm_password?: string;
}
