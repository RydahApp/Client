import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { hp, wp } from "@/utils/dimensions";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONT_WEIGHT } from "@/utils/constants";
import { authstyles } from "./styles";
import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
import AppButton from "@/components/button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation<AuthScreenNavigationProp>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1, width: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={authstyles.container}>
            <Image source={require("assets/logo_pink.png")} />
            <View>
              <Text
                style={{ fontFamily: FONT_WEIGHT.regular, fontSize: hp(16) }}
              >
                Ready to gain access back?
              </Text>
              <Text
                style={{ fontFamily: FONT_WEIGHT.medium, fontSize: hp(31) }}
              >
                Reset password
              </Text>
            </View>
            <Text
              style={{
                color: COLORS.foundation.red[400],
                fontSize: hp(13),
                marginVertical: hp(20),
              }}
            >
              Enter your email address below, and we'll send you a link to reset
              your password. Once you've received it, simply follow the
              instructions in the email to set up a new password and regain
              access to your account.
            </Text>
            <View>
              <Text style={authstyles.inputFormTitle}>Email</Text>
              <View style={[authstyles.inputContainer]}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={20}
                  color="black"
                />
                <TextInput
                  style={authstyles.input}
                  placeholder="Email address"
                  // value={fullName}
                />
              </View>
              {/* {errors.fullname && (
              <HelperText isError={true} text={errors.fullname} />
            )} */}
            </View>

            <View style={{ gap: hp(40), alignItems: "center" }}>
              <AppButton
                content="Reset password"
                onPress={() => null}
                textStyle={{ fontFamily: FONT_WEIGHT.medium }}
                otherStyles={{ width: "100%", paddingVertical: hp(16) }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
