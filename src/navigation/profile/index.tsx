import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { hp, wp } from "@/utils/dimensions";
import { FONT_WEIGHT } from "@/utils/constants";
import AppButton from "@/components/button";

const ProfileStack = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    number: 0,
    email: "",
    location: "",
  });

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
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.inputFormTitle}>First name</Text>
            <TextInput
              placeholder="Enter your first name here"
              style={styles.inputContainer}
              value={formData.firstName}
              onChangeText={(text) => {
                setFormData({ ...formData, firstName: text });
                console.log(formData.firstName);
              }}
            />
          </View>
          <View>
            <Text style={styles.inputFormTitle}>Last name</Text>
            <TextInput
              placeholder="Enter your last name here"
              style={styles.inputContainer}
              value={formData.lastName}
              onChangeText={(text) =>
                setFormData({ ...formData, lastName: text })
              }
            />
          </View>
          <View>
            <Text style={styles.inputFormTitle}>Username</Text>
            <TextInput
              placeholder="Enter your Username"
              style={styles.inputContainer}
              value={formData.userName}
              onChangeText={(text) =>
                setFormData({ ...formData, userName: text })
              }
            />
          </View>
          <View>
            <Text style={styles.inputFormTitle}>Mobile number</Text>
            <TextInput
              placeholder="Enter your Mobile number"
              style={styles.inputContainer}
              value={formData.number.toString()}
              onChangeText={(text) =>
                setFormData({ ...formData, number: parseInt(text) })
              }
            />
          </View>
          <View>
            <Text style={styles.inputFormTitle}>Email</Text>
            <TextInput
              placeholder="Enter your email address"
              style={styles.inputContainer}
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
            />
          </View>
          <View>
            <Text style={styles.inputFormTitle}>Location</Text>
            <TextInput
              placeholder="Enter your business location"
              style={styles.inputContainer}
              value={formData.location}
              onChangeText={(text) =>
                setFormData({ ...formData, location: text })
              }
            />
          </View>
        </View>
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

export default ProfileStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: hp(30),
    gap: hp(20),
    marginVertical: hp(20),
  },
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
});
