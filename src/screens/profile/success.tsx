import { hp } from "@/utils/dimensions";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";

export default function ProfileSuccessPage() {
  return (
    <View style={styles.container}>
      <View style={{ gap: hp(15), marginTop: hp(200) }}>
        <Text
          style={{ fontWeight: "500", fontSize: hp(16), textAlign: "center" }}
        >
          Personal details submission succesful.
        </Text>
        <Text style={{ fontWeight: "500", fontSize: hp(16) }}>
          You can visit profile to check to edit
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontWeight: "600" }}>Explore Rida</Text>
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
