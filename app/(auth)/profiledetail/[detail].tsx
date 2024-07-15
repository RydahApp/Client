import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { CustomButton, FormField, Topheader } from "@/components";
import { Image } from "react-native";
import { icons } from "@/constants";
import { useFormik } from "formik";
import { router } from "expo-router";
import Toast from "react-native-toast-message";
import { personalFormSchema } from "@/schema";
import { personalFormValueType } from "@/types";

const ProfileDetailFillScreen = () => {
  const initialValues: personalFormValueType = {
    first_name: "",
    last_name: "",
    username: "",
    mobile_number: "",
    email: "",
    location: "",
  };

  const onSubmit = (payload: personalFormValueType, action: any) => {
    console.log(payload);
    router.push(`/profiledetail/success`);
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
    validationSchema: personalFormSchema,
    onSubmit,
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 50 }}
      >
        <View className="w-full flex-col items-start justify-start space-y-4">
          <Topheader
            subtitle="Assalamalaykum Warhmotullah wabarakatu!"
            title="Marhaban Aisha"
          />
          <View className="w-full flex-col space-y-2 items-start justify-start">
            <Text className="text-sm text-[#6B5656] font-medium mb-3">
              Enter personal Info to continue
            </Text>
            <FormField
              title={
                <Text className="text-sm font-medium text-black">
                  First Name
                </Text>
              }
              titleShow={true}
              value={values.first_name}
              handleChangeText={handleChange("first_name")}
              onBlur={handleBlur("first_name")}
              otherStyles="mt-4"
              placeholder="Enter your first name here"
              errorClass={`${
                touched.first_name && errors.first_name ? "!border-red-500" : ""
              }`}
            />
            {touched.first_name && errors.first_name ? (
              <Text style={{ color: "red" }}>{errors.first_name}</Text>
            ) : null}
            <FormField
              title={
                <Text className="text-sm font-medium text-black">
                  Last Name
                </Text>
              }
              titleShow={true}
              value={values.last_name}
              handleChangeText={handleChange("last_name")}
              onBlur={handleBlur("last_name")}
              otherStyles="mt-4"
              placeholder="Enter your last name here"
              errorClass={`${
                touched.last_name && errors.last_name ? "!border-red-500" : ""
              }`}
            />
            {touched.last_name && errors.last_name ? (
              <Text style={{ color: "red" }}>{errors.last_name}</Text>
            ) : null}
            <FormField
              title={
                <Text className="text-sm font-medium text-black">Username</Text>
              }
              titleShow={true}
              value={values.username}
              handleChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              otherStyles="mt-4"
              placeholder="Enter your username"
              errorClass={`${
                touched.username && errors.username ? "!border-red-500" : ""
              }`}
            />
            {touched.username && errors.username ? (
              <Text style={{ color: "red" }}>{errors.username}</Text>
            ) : null}
            <FormField
              title={
                <Text className="text-sm font-medium text-black">
                  Mobile number
                </Text>
              }
              titleShow={true}
              value={values.mobile_number}
              handleChangeText={handleChange("mobile_number")}
              onBlur={handleBlur("mobile_number")}
              otherStyles="mt-4"
              placeholder="Enter your mobile number"
              keyboardType="numeric"
              errorClass={`${
                touched.mobile_number && errors.mobile_number
                  ? "!border-red-500"
                  : ""
              }`}
            />
            {touched.mobile_number && errors.mobile_number ? (
              <Text style={{ color: "red" }}>{errors.mobile_number}</Text>
            ) : null}
            <FormField
              title={
                <Text className="text-sm font-medium text-black">Email</Text>
              }
              titleShow={true}
              value={values.email}
              handleChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              otherStyles="mt-4"
              placeholder="Enter your email address"
              keyboardType="email-address"
              errorClass={`${
                touched.email && errors.email ? "!border-red-500" : ""
              }`}
            />
            {touched.email && errors.email ? (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            ) : null}
            <FormField
              title={
                <Text className="text-sm font-medium text-black">Location</Text>
              }
              titleShow={true}
              value={values.location}
              handleChangeText={handleChange("location")}
              onBlur={handleBlur("location")}
              otherStyles="mt-4"
              placeholder="Enter your location"
              errorClass={`${
                touched.location && errors.location ? "!border-red-500" : ""
              }`}
            />
            {touched.location && errors.location ? (
              <Text style={{ color: "red" }}>{errors.location}</Text>
            ) : null}
            <CustomButton
              title="Submit"
              containerStyles="bg-primary mt-3 w-full py-3"
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

export default ProfileDetailFillScreen;