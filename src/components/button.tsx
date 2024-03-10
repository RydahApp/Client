import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { hp, wp } from "@/utils/dimensions";
import { COLORS } from "@/utils/constants";

const AppButton = ({
  content,
  otherStyles,
  onPress,
  textStyle,
}: {
  content: string;
  otherStyles?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={[styles.ctaButton, otherStyles]} onPress={onPress}>
      <Text style={[{ color: "black" }, textStyle]}>{content}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  ctaButton: {
    width: wp(200),
    minHeight: wp(40),
    backgroundColor: COLORS.foundation.red[200],
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(34),
    borderRadius: hp(10),
  },
});
