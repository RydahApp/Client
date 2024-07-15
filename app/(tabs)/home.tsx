import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";
import { icons } from "@/constants";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white flex-1 py-10">
      <View className="w-full px-5 flex-row items-center justify-between">
        <View className="relative flex-row space-x-3 items-center justify-start">
          <View className="relative w-14 h-14 flex-row items-center justify-center bg-primary rounded-full">
            <Image source={icons.avatarIcon} alt="profile avatar" />
            <View className="w-4 h-4 bg-[#04802E] rounded-full border border-white absolute right-1 bottom-[1px]" />
          </View>
          <View className="flex-col items-start justify-start space-y-1">
            <Text className="text-xl font-normal text-black">Aisha Uthman</Text>
            <Text className="text-sm font-medium text-black">Aisha Ventures</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
