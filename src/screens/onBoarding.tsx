import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { hp } from "@/utils/dimensions";
import { FONT_WEIGHT } from "@/utils/constants";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const OnBoarding = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();
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
        style={{
          paddingHorizontal: hp(30),
          gap: hp(25),
          marginTop: hp(44),
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <View style={{ gap: hp(25) }}>
          <Text style={{ fontSize: hp(27), fontFamily: FONT_WEIGHT.regular }}>
            Welcome to a safe and secure market space for Muslim women!
          </Text>
          <Text style={{ fontSize: hp(18), fontFamily: FONT_WEIGHT.regular }}>
            Find your perfect fit: Explore a diverse range of modest clothing,
            accessories, beauty, and lifestyle essentials.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 20,
          }}
        >
          <TouchableOpacity>
            <Text style={{ fontFamily: FONT_WEIGHT.light }}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFCCCC",
              paddingVertical: hp(8),
              paddingHorizontal: hp(12),
              borderRadius: 7,
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ fontFamily: FONT_WEIGHT.medium }}>Get started</Text>
            <AntDesign name="arrowright" size={15} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
});
