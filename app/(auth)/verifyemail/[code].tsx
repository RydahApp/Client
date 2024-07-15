import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { CustomButton, Topheader } from "@/components";
import { Image } from "react-native";
import { icons } from "@/constants";
import { authFormSchema, otpVerifySchema } from "@/schema";
import { useFormik } from "formik";
import { router, useLocalSearchParams } from "expo-router";
import { authFormValueType, otpFormValueType } from "@/types";
import Toast from "react-native-toast-message";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 4;

const VerifyEmailCodeScreen = () => {
  // const { code } = useLocalSearchParams<{ code?: string }>();
  // const sentpayload = code && JSON.parse(code);

  const initialValues: otpFormValueType = {
    otp_code: "",
  };

  const onSubmit = (payload: otpFormValueType, action: any) => {
    console.log(payload);
    router.push(`/verifyemail/success`);
    action.resetForm();
  };

  const { values, isSubmitting, setFieldValue, handleSubmit } = useFormik({
    initialValues,
    validationSchema: otpVerifySchema,
    onSubmit,
  });

  const ref = useBlurOnFulfill({
    value: values.otp_code,
    cellCount: CELL_COUNT,
  });

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: values.otp_code,
    setValue: (code) => setFieldValue("otp_code", code),
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 50 }}
      >
        <View className="w-full flex-col items-start justify-start space-y-4">
          <Topheader
            subtitle="Check your mail!"
            title="We’ve sent you a Mail"
          />
          <View className="w-full flex-col space-y-2 items-start justify-start">
            <Text className="text-sm font-medium text-black">
              Enter the 4-digit code we sent to you to verify
            </Text>
            <View className="w-full">
              <CodeField
                ref={ref}
                {...props}
                value={values.otp_code}
                onChangeText={(code) => setFieldValue("otp_code", code)}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFiledRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}
                  >
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
            </View>
          </View>
          <CustomButton
            title="Verify"
            containerStyles="bg-primary my-8 w-full py-4"
            titleStyle="text-base font-medium text-black"
            isLoading={isSubmitting}
            handlePress={handleSubmit}
          />
          <View className="flex-row items-center justify-center space-x-1 py-3">
            <Text className="text-sm font-normal text-black">
              Didn’t receive any code?
            </Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text className="text-sm font-normal text-[#997A7A] underline">
                Change verification method
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  codeFiledRoot: { marginTop: 10 },
  cell: {
    width: 64,
    height: 64,
    lineHeight: 59,
    fontSize: 43,
    borderWidth: 1,
    borderColor: "#EAECF0",
    backgroundColor: "#FFF",
    borderRadius: 6,
    textAlign: "center",
    shadowColor: "#1018280D",
  },
  focusCell: {
    borderColor: "#997A7A",
    color: "#997A7A",
  },
});

export default VerifyEmailCodeScreen;
