import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";

interface TopHeaderProp {
  subtitle: string;
  title: string;
}

const Topheader: React.FC<TopHeaderProp> = ({ subtitle, title }) => {
  return (
    <View className="w-full flex-col items-start justify-start space-y-5">
      <Image
        source={images.rydahLogo}
        alt="Rydah app logo"
        resizeMode="contain"
      />
      <View className="flex-col items-start justify-start space-y-2">
        <Text className="text-base font-normal text-black">{subtitle}</Text>
        <Text className="text-3xl font-medium text-black">{title}</Text>
      </View>
    </View>
  );
};

export default Topheader;
