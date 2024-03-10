import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { hp, wp } from "@/utils/dimensions";
import { COLORS, FONT_WEIGHT } from "@/utils/constants";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import HelperText from "@/components/HelperText";
import { useTogglePasswordVisibility } from "@/hooks/useTogglePasswordVisibility";
import { useNavigation } from "@react-navigation/native";
import AppButton from "@/components/button";
import { authstyles } from "./styles";

const Login = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={require("assets/logo_pink.png")} />
        <View>
          <Text style={{ fontFamily: FONT_WEIGHT.regular, fontSize: hp(16) }}>
            Already have an account?
          </Text>
          <Text style={{ fontFamily: FONT_WEIGHT.medium, fontSize: hp(31) }}>
            Log in
          </Text>
        </View>
        <View style={{ gap: 20 }}>
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
          <View>
            <Text style={authstyles.inputFormTitle}>Password</Text>
            <View style={[authstyles.inputContainer]}>
              <MaterialCommunityIcons
                name="lock-outline"
                size={20}
                color="black"
              />
              <TextInput
                style={authstyles.input}
                placeholder="Password (min 8)"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={passwordVisibility}
                enablesReturnKeyAutomatically
              />
              <Pressable onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons
                  name={rightIcon}
                  size={20}
                  color="#333333c5"
                />
              </Pressable>
            </View>

            {/* {errors.fullname && (
              <HelperText isError={true} text={errors.fullname} />
            )} */}
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text>Forgot Password?</Text>
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
                Click here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ gap: hp(20) }}>
          <AppButton
            content="Log In"
            onPress={() => null}
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
            <Text>New here?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
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
                Create account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: hp(30),
    gap: hp(20),
  },
});
