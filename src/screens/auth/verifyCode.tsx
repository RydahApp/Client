import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import OTPInputField from "@/components/otp/OTPInput";
import { hp, wp } from "@/utils/dimensions";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONT_WEIGHT } from "@/utils/constants";
import { authstyles } from "./styles";
import AppButton from "@/components/button";

const VerifyCode = () => {
  const [code, setCode] = useState("");
  const [pinReady, setPinReady] = useState(false);
  const MAX_CODE_LENGHT = 4;
  const navigation = useNavigation<AuthScreenNavigationProp>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={authstyles.container}>
        <Image source={require("assets/logo_pink.png")} />
        <View>
          <Text style={{ fontFamily: FONT_WEIGHT.regular, fontSize: hp(16) }}>
            Check your mail!
          </Text>
          <Text style={{ fontFamily: FONT_WEIGHT.medium, fontSize: hp(31) }}>
            We’ve sent you a Mail
          </Text>
        </View>
        <View
          style={{
            // alignItems: "center",
            // justifyContent: "center",
            marginTop: hp(20),
          }}
        >
          <Text style={{ fontFamily: FONT_WEIGHT.medium, fontSize: hp(12) }}>
            Enter the 4-digit code we sent to you to verify
          </Text>
          <OTPInputField
            setPinReady={setPinReady}
            code={code}
            setCode={setCode}
            maxLength={MAX_CODE_LENGHT}
          />
        </View>
        <View style={{ gap: hp(30), alignItems: "center" }}>
          <AppButton
            content="Verify"
            onPress={() => navigation.navigate("Verify")}
            textStyle={{ fontFamily: FONT_WEIGHT.medium }}
            otherStyles={{ width: "100%", paddingVertical: hp(16) }}
          />
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text> Didn’t receive any code?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: COLORS.foundation.red[400],
              }}
            >
              <Text
                style={{
                  color: COLORS.foundation.red[400],
                  fontFamily: FONT_WEIGHT.semibold,
                }}
              >
                Resend Again
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyCode;

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
