import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { CustomButton, FormField, Topheader } from "@/components";
import { Image } from "react-native";
import { icons } from "@/constants";
import { forgetSchema, resetFormSchema } from "@/schema";
import { useFormik } from "formik";
import { router } from "expo-router";
import { resetFormValueType } from "@/types";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

const ResetPasswordScreen = () => {
  const initialValues: resetFormValueType = {
    password: "",
    confirm_password: "",
  };

  const onSubmit = (payload: resetFormValueType, action: any) => {
    console.log(payload);
    router.push(`/resetpassword/success`);
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
    validationSchema: resetFormSchema,
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
          <View className="w-full flex-col items-start justify-start space-y-2">
            <FormField
              title={
                <Text className="text-sm font-medium text-black">
                  New password
                </Text>
              }
              type="Password"
              titleShow={true}
              value={values.password}
              handleChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              otherStyles="mt-4"
              placeholder="Your password"
              errorClass={`${
                touched.password && errors.password ? "!border-red-500" : ""
              }`}
            />
          </View>
          {touched.password && errors.password ? (
            <View className="flex-row items-center space-x-2">
              <MaterialIcons name="error-outline" size={16} color="red" />
              <Text style={{ color: "red" }}>{errors.password}</Text>
            </View>
          ) : null}
          <FormField
            title={
              <Text className="text-sm font-medium text-black">
                Confirm password
              </Text>
            }
            type="Password"
            titleShow={true}
            value={values.confirm_password}
            handleChangeText={handleChange("confirm_password")}
            onBlur={handleBlur("confirm_password")}
            otherStyles="mt-4"
            placeholder="Your password"
            errorClass={`${
              touched.confirm_password && errors.confirm_password
                ? "!border-red-500"
                : ""
            }`}
          />
          {touched.confirm_password && errors.confirm_password ? (
            <View className="flex-row items-center space-x-2">
              <MaterialIcons name="error-outline" size={16} color="red" />
              <Text style={{ color: "red" }}>{errors.confirm_password}</Text>
            </View>
          ) : null}
          <CustomButton
            title="Reset password"
            containerStyles="bg-primary my-8 w-full py-4"
            titleStyle="text-base font-medium text-black"
            isLoading={isSubmitting}
            handlePress={handleSubmit}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
