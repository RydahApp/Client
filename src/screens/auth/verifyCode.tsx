import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import OTPInputField from "@/components/otp/OTPInput";
import { hp, wp } from "@/utils/dimensions";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONT_WEIGHT } from "@/utils/constants";
import { authstyles } from "./styles";

const VerifyCode = () => {
  const [code, setCode] = useState("");
  const [pinReady, setPinReady] = useState(false);
  const MAX_CODE_LENGHT = 5;
  const navigation = useNavigation<AuthScreenNavigationProp>();

  return (
    <View style={{ flex: 1 }}>
      <View style={authstyles.forgotPasswordTextContainer}>
        <Text style={authstyles.forgotPasswordTitle}>Almost there</Text>
        <Text style={authstyles.forgotPasswordSubtitle}>
          Please enter the 6-digit code sent to your email
          <Text
            style={{ color: COLORS.foundation.red[200], fontWeight: "600" }}
          >
            {" "}
            conabdullsalui@gmail.com{" "}
          </Text>{" "}
          for verification.
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <OTPInputField
          setPinReady={setPinReady}
          code={code}
          setCode={setCode}
          maxLength={MAX_CODE_LENGHT}
        />
      </View>
      <View style={{ gap: hp(40), alignItems: "center" }}>
        <TouchableOpacity
          style={styles.cta}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: "white" }}>Verify</Text>
        </TouchableOpacity>
        <View style={{ gap: 5, alignItems: "center" }}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={{ fontWeight: "600" }}>Didn’t receive any code?</Text>
            <Text>Resend Again</Text>
          </View>

          <Text style={{ color: "#00000", opacity: 0.5 }}>
            Request new code in 00:30s
          </Text>
        </View>
      </View>
    </View>
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
