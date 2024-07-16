import React from "react";
import { View, Text } from "react-native";
import { CustomButton } from "@/components";
import { router } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

const CheckoutSuccessScreen = () => {
  return (
    <View className="flex-1 bg-white flex-col items-center justify-center space-y-5">
      <View className="w-[229px] h-[229px]" />
      <View className="flex-col items-center justify-center w-full">
        <Text className="text-sm font-medium text-black mb-3">
          Payment Successful
        </Text>
        <CustomButton
          handlePress={() => {
            router.push(`/home`);
            Toast.show({
              type: "success",
              text1: "Your placed order has been confirmed by the seller",
              position: "top",
            });
          }}
          title={
            <View className="flex-row items-end justify-center space-x-2">
              <Text className="text-base text-black font-medium">
                Back to market
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

export default CheckoutSuccessScreen;
