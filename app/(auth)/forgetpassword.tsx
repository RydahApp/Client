import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { CustomButton, FormField, Topheader } from "@/components";
import { Image } from "react-native";
import { icons } from "@/constants";
import { authFormSchema } from "@/schema";
import { useFormik } from "formik";
import { router } from "expo-router";
import { authFormValueType } from "@/types";
import Toast from "react-native-toast-message";

const ForgetPasswordScreen = () => {
  const initialValues: authFormValueType = {
    email: "",
    password: "",
  };

  const onSubmit = (payload: authFormValueType, action: any) => {
    console.log(payload);
    Toast.show({
      type: "success",
      text1: "We’ve sent you 4-digit code to your Mail",
      position: "bottom",
    });
    router.push(`/verifyemail/${payload.email}`);

    action.resetForm();
  };

  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: authFormSchema,
    onSubmit,
  });
  return (
    <View>
      <Text>ForgetPasswordScreen</Text>
    </View>
  );
};

export default ForgetPasswordScreen;
