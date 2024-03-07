import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { hp, wp } from "@/utils/dimensions";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "@/utils/constants";
import { authstyles } from "./styles";
import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation<AuthScreenNavigationProp>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={authstyles.forgotPasswordTextContainer}>
        <Text style={authstyles.forgotPasswordTitle}>Forgot Password</Text>
        <Text style={authstyles.forgotPasswordSubtitle}>
          Please enter your e-mail to reset password
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={[authstyles.input, authstyles.passwordContainer]}>
          <TextInput
            style={{
              height: "100%",
            }}
            placeholder="Enter your email"
            onChangeText={setEmail}
          />
          <MaterialCommunityIcons
            name={"email-outline"}
            size={22}
            color="#333333c5"
          />
        </View>
      </View>

      <View style={{ gap: hp(40), alignItems: "center" }}>
        <TouchableOpacity
          style={styles.cta}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: "white" }}>Reset Password</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: COLORS.primary.main,
          padding: 5,
          borderRadius: 100,
          height: hp(50),
          width: hp(50),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesome6 name="less-than" size={24} color="white" />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  cta: {
    width: wp(200),
    height: wp(40),
    backgroundColor: COLORS.primary.main,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(34),
    borderRadius: hp(10),
  },
});
