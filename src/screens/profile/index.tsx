import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useState } from "react";
import { hp, wp } from "@/utils/dimensions";
import { FONT_WEIGHT } from "@/utils/constants";
import AppButton from "@/components/button";
import { useNavigation } from "@react-navigation/native";

const ProfileInformation = () => {
  const navigation = useNavigation<ProfileStackNavigationProp>();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    number: 0,
    email: "",
    location: "",
  });

  // State for tracking focus of each input
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);
  const [isUserNameFocused, setIsUserNameFocused] = useState(false);
  const [isNumberFocused, setIsNumberFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isLocationFocused, setIsLocationFocused] = useState(false);

  // Function to handle form submission
  const handleSubmit = () => {
    if (
      formData.firstName &&
      formData.lastName &&
      formData.userName &&
      formData.number &&
      formData.email &&
      formData.location
    ) {
      console.log("Form submitted successfully:", formData);
    } else {
      console.log("Please fill all fields before submitting.");
    }
    navigation.navigate("success");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image source={require("../../../assets/logo_pink.png")} />
        <View>
          <Text style={{ fontWeight: "500" }}>
            Assalamalaykum Warhmotullah wabarakatu!
          </Text>
          <Text style={{ fontSize: hp(31), fontWeight: "500" }}>
            Marhaban Aisha
          </Text>
        </View>

        <Text>Enter personal Info to continue</Text>
        {/* <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardAvoidingView}
          > */}
        {/* <KeyboardAwareScrollView
            contentContainerStyle={styles.formContainer}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={false}
          > */}
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.inputFormTitle}>First name</Text>
            <TextInput
              placeholder="Enter your first name here"
              style={[
                styles.inputContainer,
                isFirstNameFocused ? styles.inputContainerFocused : {},
              ]}
              value={formData.firstName}
              onChangeText={(text) => {
                setFormData({ ...formData, firstName: text });
                console.log(formData.firstName);
              }}
              onFocus={() => setIsFirstNameFocused(true)}
              onBlur={() => setIsFirstNameFocused(false)}
            />
          </View>
          <View>
            <Text style={styles.inputFormTitle}>Last name</Text>
            <TextInput
              placeholder="Enter your last name here"
              style={[
                styles.inputContainer,
                isLastNameFocused ? styles.inputContainerFocused : {},
              ]}
              value={formData.lastName}
              onChangeText={(text) =>
                setFormData({ ...formData, lastName: text })
              }
              onFocus={() => setIsLastNameFocused(true)}
              onBlur={() => setIsLastNameFocused(false)}
            />
          </View>
          <View>
            <Text style={styles.inputFormTitle}>Username</Text>
            <TextInput
              placeholder="Enter your Username"
              style={[
                styles.inputContainer,
                isUserNameFocused ? styles.inputContainerFocused : {},
              ]}
              value={formData.userName}
              onChangeText={(text) =>
                setFormData({ ...formData, userName: text })
              }
              onFocus={() => setIsUserNameFocused(true)}
              onBlur={() => setIsUserNameFocused(false)}
            />
          </View>
          <View>
            <Text style={styles.inputFormTitle}>Mobile number</Text>
            <TextInput
              placeholder="Enter your Mobile number"
              style={[
                styles.inputContainer,
                isNumberFocused ? styles.inputContainerFocused : {},
              ]}
              value={formData.number.toString()}
              onChangeText={(text) =>
                setFormData({ ...formData, number: parseInt(text) })
              }
              onFocus={() => setIsNumberFocused(true)}
              onBlur={() => setIsNumberFocused(false)}
            />
          </View>
          <View>
            <Text style={styles.inputFormTitle}>Email</Text>
            <TextInput
              placeholder="Enter your email address"
              style={[
                styles.inputContainer,
                isEmailFocused ? styles.inputContainerFocused : {},
              ]}
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
            />
          </View>
          <View>
            <Text style={styles.inputFormTitle}>Location</Text>
            <TextInput
              placeholder="Enter your business location"
              style={[
                styles.inputContainer,
                isLocationFocused ? styles.inputContainerFocused : {},
              ]}
              value={formData.location}
              onChangeText={(text) =>
                setFormData({ ...formData, location: text })
              }
              onFocus={() => setIsLocationFocused(true)}
              onBlur={() => setIsLocationFocused(false)}
            />
          </View>
        </View>
        {/* </KeyboardAwareScrollView> */}
        {/* </KeyboardAvoidingView> */}
        <AppButton
          content="Submit"
          onPress={handleSubmit}
          textStyle={{ fontFamily: FONT_WEIGHT.medium }}
          otherStyles={{ width: "100%", paddingVertical: hp(16) }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProfileInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: hp(30),
    gap: hp(20),
    marginVertical: hp(20),
  },
  // keyboardAvoidingView: {
  //   flex: 1,
  // },
  formContainer: {
    gap: hp(10),
  },
  inputFormTitle: {
    fontFamily: FONT_WEIGHT.medium,
    fontSize: hp(10),
    marginBottom: hp(8),
  },
  inputContainer: {
    height: hp(50),
    borderColor: "#D0D5DD",
    borderWidth: 1,
    borderRadius: wp(8),
    paddingHorizontal: wp(10),
  },
  inputContainerFocused: {
    borderColor: "#FFCCCC",
  },
});
