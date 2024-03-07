import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp } from "@/utils/dimensions";

const OnBoarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#FFCCCC",
          alignItems: "center",
          justifyContent: "center",
          height: "40%",
        }}
      >
        <Image source={require("assets/logo.png")} />
      </View>
      <View
        style={{ paddingHorizontal: hp(30), gap: hp(25), marginTop: hp(44) }}
      >
        <Text style={{ fontSize: hp(27) }}>
          Welcome to a safe and secure market space for Muslim women!
        </Text>
        <Text style={{ fontSize: hp(18) }}>
          Find your perfect fit: Explore a diverse range of modest clothing,
          accessories, beauty, and lifestyle essentials.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
