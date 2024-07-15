import React from "react";
import { View, Text } from "react-native";
import { CustomButton } from "@/components";
import { router } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import useFirstStore from "@/store";

const ProfileSuccessScreen = () => {
  const { setIsAppFirstLaunched } = useFirstStore();
  return (
    <View className="flex-1 bg-white flex-col items-center justify-center space-y-5">
      <View className="w-[229px] h-[229px]" />
      <View className="flex-col items-center justify-center w-full">
        <Text className="text-base text-center font-medium text-black mb-3">
          Personal details submission succesful.
        </Text>
        <Text className="text-base text-center font-medium text-black mb-3">
          You can visit profile to check to edit
        </Text>
        <CustomButton
          handlePress={() => {
            setIsAppFirstLaunched(true);
            router.push("/home");
          }}
          title={
            <View className="flex-row items-end justify-center space-x-2">
              <Text className="text-base text-black font-medium">
                Explore Rydah
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

export default ProfileSuccessScreen;
