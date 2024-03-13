import { hp } from "@/utils/dimensions";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";

export default function SetSuccessPage() {
  return (
    <View style={styles.container}>
      <View style={{ gap: hp(15), marginTop: hp(200) }}>
        <Text
          style={{ fontWeight: "400", fontSize: hp(16), textAlign: "center" }}
        >
          Password reset successful{" "}
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontWeight: "600" }}>Proceed to Login</Text>
        <Icon name="arrowright" size={15} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: hp(60),
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: hp(8),
    backgroundColor: "#FFCCCC",
    padding: hp(10),
    paddingHorizontal: hp(15),
    borderRadius: hp(8),
    marginTop: hp(10),
  },
});
