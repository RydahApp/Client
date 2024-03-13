import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { hp, wp } from "@/utils/dimensions";
import { COLORS, FONT_WEIGHT } from "@/utils/constants";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "@/hooks/useTogglePasswordVisibility";
import { useNavigation } from "@react-navigation/native";
import AppButton from "@/components/button";
import { authstyles } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

const Login = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  // State for passwords
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showError, setShowError] = useState(false);

  // Function to handle password reset
  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      setShowError(true);
    } else {
      setShowError(false);
      navigation.navigate("SetSuccess");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("assets/logo_pink.png")} />
      <View>
        <Text style={{ fontFamily: FONT_WEIGHT.regular, fontSize: hp(16) }}>
          Ready to gain access back?
        </Text>
        <Text style={{ fontFamily: FONT_WEIGHT.medium, fontSize: hp(31) }}>
          Reset password
        </Text>
      </View>
      <View style={{ gap: 20 }}>
        <View>
          <Text style={authstyles.inputFormTitle}>New password</Text>
          <View style={[authstyles.inputContainer]}>
            <TextInput
              style={authstyles.input}
              placeholder="Your password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={passwordVisibility}
              enablesReturnKeyAutomatically
              onChangeText={setNewPassword}
            />
            <Pressable onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons
                name={rightIcon}
                size={20}
                color="#333333c5"
              />
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={authstyles.inputFormTitle}>Confirm password</Text>
          <View style={[authstyles.inputContainer]}>
            <TextInput
              style={authstyles.input}
              placeholder="Your password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={passwordVisibility}
              enablesReturnKeyAutomatically
              onChangeText={setConfirmPassword}
            />
            <Pressable onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons
                name={rightIcon}
                size={20}
                color="#333333c5"
              />
            </Pressable>
          </View>
        </View>
      </View>
      {showError && (
        <View
          style={{ flexDirection: "row", alignItems: "center", gap: hp(10) }}
        >
          <Icon name="error-outline" size={30} color="#CB1A14" />
          <Text style={{ color: "#CB1A14" }}>Password does not match</Text>
        </View>
      )}
      <View>
        <AppButton
          content="Reset password"
          onPress={handleResetPassword}
          textStyle={{ fontFamily: FONT_WEIGHT.medium }}
          otherStyles={{ width: "100%", paddingVertical: hp(16) }}
        />
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
