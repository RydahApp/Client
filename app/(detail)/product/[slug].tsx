import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { shopData } from "@/constants/data";
import { TouchableOpacity } from "react-native";
import { AntDesign, Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { Fee, formatNGNCurrency } from "@/helpers";
import { CustomButton, CustomizeSwitch } from "@/components";
import { icons } from "@/constants";

const ProductdetailScreen = () => {
  const { slug } = useLocalSearchParams<{ slug?: string }>();
  const [count, setCount] = useState(1);
  const [showFee, setShowFee] = useState(true);

  const data = shopData.find((item) => item.id === slug);

  if (!data) return;

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const totalPrice = data.price + Fee;

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 15,
        }}
      >
        <View className="w-full h-[350px] relative">
          <Image
            source={data.product_image}
            resizeMode="cover"
            className="w-full h-full"
          />
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute top-4 left-4"
          >
            <Entypo
              name="chevron-thin-left"
              size={24}
              color="white"
              className=""
            />
          </TouchableOpacity>
        </View>
        <View className="w-full py-5 px-5 flex-col items-start justify-start space-y-6">
          <View className="w-full flex-row items-start justify-between">
            <View className="flex-col items-start justify-start space-y-1">
              <Text className="text-base font-medium text-black">
                {data.title}
              </Text>
              <Text className="text-xl font-normal text-black">
                {formatNGNCurrency(data.price)}
              </Text>
            </View>
            <View className="flex-row items-center justify-end space-x-5">
              <TouchableOpacity>
                <FontAwesome name="heart" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="share-2" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-full flex-row items-center justify-between">
            <View className="flex-col items-start justify-start space-y-2">
              <Text className="text-sm font-medium text-black">
                Color : Brown
              </Text>
              <Text className="text-sm font-medium text-black">Size : 42</Text>
              <Text className="text-sm font-medium text-black">
                Brand: Classical
              </Text>
            </View>
            <View className="bg-primary border border-primary flex-row justify-between py-2 px-3 w-[102px] rounded-full">
              <TouchableOpacity onPress={decrementCount}>
                <AntDesign name="minus" size={16} color="#121212" />
              </TouchableOpacity>
              <Text className="text-sm font-semibold text-black">{count}</Text>
              <TouchableOpacity onPress={incrementCount}>
                <AntDesign name="plus" size={16} color="#121212" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-full flex-row space-x-4 items-start justify-between">
            <View className="flex-row items-start justify-start space-x-2">
              <CustomizeSwitch
                isOn={showFee}
                onToggle={() => setShowFee(true)}
              />
              <View className="flex-col items-start justify-start space-y-2">
                <Text className="text-xs font-medium text-[#594747]">
                  Buy protection fee <Text className="font-bold">(₦ 500)</Text>
                </Text>
                <Text className="text-[10px] font-medium text-[#98A2B3] max-w-[161px]">
                  This serves as a protection fee for your orders in case of
                  loss or damages
                </Text>
              </View>
            </View>
            <View className="h-14 px-4 bg-[#FFFAFA] border border-primary flex-row items-center justify-center rounded-md">
              <Text className="text-2xl font-normal text-black">
                {formatNGNCurrency(totalPrice)}
              </Text>
            </View>
          </View>
          <View className="w-full flex-col space-y-4 items-center justify-center">
            <CustomButton
              handlePress={() => router.push(`/home`)}
              title={
                <View className="flex-row items-end justify-center space-x-2 w-full">
                  <Image source={icons.buyCheckIcon} alt="buy icon" />
                  <Text className="text-base text-black font-medium">
                    Buy now
                  </Text>
                </View>
              }
              containerStyles="bg-primary py-3 w-full"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductdetailScreen;
