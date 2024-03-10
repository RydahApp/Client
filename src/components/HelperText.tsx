import { FONT_WEIGHT } from "@/utils/constants";
import React from "react";
import { Text, StyleSheet } from "react-native";

interface HelperTextProps {
  isError: boolean;
  text: string;
}

const HelperText: React.FC<HelperTextProps> = ({ isError, text }) => {
  const textColor = isError ? "red" : "green";

  return <Text style={[styles.helperText, { color: textColor }]}>{text}</Text>;
};

const styles = StyleSheet.create({
  helperText: {
    fontSize: 12,
    marginBottom: 3,
    fontFamily: FONT_WEIGHT.light,
  },
});

export default HelperText;
