import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { CustomButton, FormField, Topheader } from "@/components";
import { Image } from "react-native";
import { icons } from "@/constants";
import { forgetSchema } from "@/schema";
import { useFormik } from "formik";
import { router } from "expo-router";
import { forgetFormValueType } from "@/types";
import Toast from "react-native-toast-message";
import { Entypo } from "@expo/vector-icons";

const ForgetPasswordScreen = () => {
  const initialValues: forgetFormValueType = {
    email: "",
  };

  const onSubmit = (payload: forgetFormValueType, action: any) => {
    console.log(payload);
    Toast.show({
      type: "success",
      text1: "We’ve sent you 4-digit code to your Mail",
      position: "bottom",
    });
    router.push(`/resetpassword/otp/${payload.email}`);
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
    validationSchema: forgetSchema,
    onSubmit,
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 50 }}
      >
        <View className="w-full flex-col items-start justify-start space-y-4">
          <TouchableOpacity onPress={() => router.back()} className="mb-10">
            <Entypo name="chevron-thin-left" size={24} color="black" />
          </TouchableOpacity>
          <Topheader
            subtitle="Ready to gain access back?"
            title="Reset password"
          />
          <Text className="text-sm font-normal text-[#997A7A] pt-6">
            Enter your email address below, and we'll send you a link to reset
            your password. Once you've received it, simply follow the
            instructions in the email to set up a new password and regain access
            to your account.
          </Text>
          <View className="w-full flex-col space-y-2 items-start justify-start">
            <View className="relative w-full">
              <FormField
                title={
                  <Text className="text-sm font-medium text-black">Email</Text>
                }
                titleShow={true}
                value={values.email}
                handleChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                otherStyles="mt-4"
                placeholder="Input email address"
                keyboardType="email-address"
                errorClass={`${
                  touched.email && errors.email ? "!border-red-500" : ""
                } pl-[45px]`}
              />
              <View className="flex-row items-center justify-start space-x-2 absolute top-[66%] left-[6%]">
                <Image
                  source={icons.mailIcon}
                  resizeMode="contain"
                  className="w-4 h-4"
                />
              </View>
            </View>
            {touched.email && errors.email ? (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            ) : null}

            <CustomButton
              title="Reset password"
              containerStyles="bg-primary my-8 w-full py-4"
              titleStyle="text-base font-medium text-black"
              isLoading={isSubmitting}
              handlePress={handleSubmit}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;
