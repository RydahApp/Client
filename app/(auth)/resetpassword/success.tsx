import React from "react";
import { View, Text } from "react-native";
import { CustomButton } from "@/components";
import { router } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";

const ResetSuccessScreen = () => {
  return (
    <View className="flex-1 bg-white flex-col items-center justify-center space-y-5">
      <View className="w-[229px] h-[229px]" />
      <View className="flex-col items-center justify-center w-full">
        <Text className="text-sm font-medium text-black mb-3">
          Password reset successful
        </Text>
        <CustomButton
          handlePress={() => router.push(`/login`)}
          title={
            <View className="flex-row items-end justify-center space-x-2">
              <Text className="text-base text-black font-medium">
                Proceed to Login
              </Text>
              <FontAwesome6 name="arrow-right-long" size={18} color="black" />
            </View>
          }
          containerStyles="bg-primary px-3"
        />
      </View>
    </View>
  );
};

export default ResetSuccessScreen;
