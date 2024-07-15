import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Platform,
  UIManager,
  TouchableOpacity,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { shopData } from "@/constants/data";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome6,
} from "@expo/vector-icons";
import { Fee, formatNGNCurrency } from "@/helpers";
import { CustomButton, CustomizeSwitch, StarRate } from "@/components";
import { icons } from "@/constants";
import { LayoutAnimation } from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ProductdetailScreen = () => {
  const { slug } = useLocalSearchParams<{ slug?: string }>();
  const [count, setCount] = useState(1);
  const [showFee, setShowFee] = useState(true);
  const [dropDown, setDropDown] = useState({
    description: true,
    rate: false,
  });
  const descriptionRef = useRef<View>(null);
  const scrollViewRef = useRef<ScrollView>(null);

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

  const toggleDropdown = (key: keyof typeof dropDown) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setDropDown((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));

    if (!dropDown[key]) {
      descriptionRef.current?.measureLayout(
        scrollViewRef.current as any,
        (x, y) => {
          scrollViewRef.current?.scrollTo({ y, animated: true });
        },
        () => {}
      );
    }
  };

  const totalPrice = data.price + Fee;

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView
        ref={scrollViewRef}
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
            <Entypo name="chevron-thin-left" size={24} color="white" />
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
          <View className="w-full">
            <CustomButton
              handlePress={() => router.push(`/checkout/${data.id}`)}
              title={
                <View className="flex-row items-center justify-center space-x-2 w-full">
                  <Image
                    source={icons.buyCheckIcon}
                    alt="buy icon"
                    resizeMode="contain"
                  />
                  <Text className="text-base text-black font-medium">
                    Buy now
                  </Text>
                </View>
              }
              containerStyles="bg-primary py-3 mb-3 w-full"
            />
            <CustomButton
              handlePress={() => router.push(`/home`)}
              title={
                <View className="flex-row items-center justify-center space-x-2 w-full">
                  <Image
                    source={icons.offerIcon}
                    alt="offer icon"
                    resizeMode="contain"
                  />
                  <Text className="text-base text-black font-medium">
                    Make an offer
                  </Text>
                </View>
              }
              containerStyles="bg-[#FFFAFA] border-2 border-primary py-3 w-full"
            />
          </View>
          <View className="flex-col items-start justify-start space-y-3 w-full">
            <View className="w-full flex-col items-start justify-start border border-[#E4E7EC] rounded-lg">
              <TouchableOpacity
                onPress={() => toggleDropdown("description")}
                className="w-full flex-row items-center justify-between p-4 rounded-lg"
              >
                <Text className="tex-sm font-medium text-black">
                  Product Description
                </Text>
                <View className="w-8 h-8 border border-[#98A2B3] flex-row items-center justify-center rounded">
                  <Entypo name="chevron-thin-right" size={16} color="black" />
                </View>
              </TouchableOpacity>
              <View
                ref={descriptionRef}
                className={`w-full overflow-hidden transition-all duration-300 ${
                  dropDown.description === true
                    ? "max-h-[1000px] px-4 pb-4"
                    : "max-h-0"
                }`}
              >
                <Text className="text-xs font-normal text-[#98A2B3]">
                  Checkered bag women's single shoulder indentation women's bag
                  single room square bag. The fabric is made of PU leather,
                  which is durableThe opening method is zipper, which is
                  convenientBag size: length 20.5cm * height 12cm * thickness
                  6cm, large capacityThe shoulder strap is 120cm long and can be
                  used as a hand bag or a single shoulder bag
                </Text>
              </View>
            </View>
            <View className="w-full flex-col items-start justify-start border border-[#E4E7EC] rounded-lg">
              <TouchableOpacity
                onPress={() => toggleDropdown("rate")}
                className="w-full flex-row items-center justify-between p-4 rounded-lg"
              >
                <Text className="tex-sm font-medium text-black">
                  Product ratings and comments
                </Text>
                <View className="w-8 h-8 border border-[#98A2B3] flex-row items-center justify-center rounded">
                  <Entypo name="chevron-thin-right" size={16} color="black" />
                </View>
              </TouchableOpacity>
              <View
                ref={descriptionRef}
                className={`w-full overflow-hidden transition-all duration-300 ${
                  dropDown.rate === true
                    ? "max-h-[1000px] px-4 pb-4"
                    : "max-h-0"
                }`}
              >
                <View className="flex-row items-center justify-start space-x-3">
                  <Text className="text-sm font-semibold text-[#98A2B3]">
                    5.0
                  </Text>
                  <View>
                    <StarRate starIndex={5} totalStar={5} />
                  </View>
                  <Text className="text-sm font-semibold text-[#98A2B3]">
                    (27)
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="w-full flex-col items-start justify-start border border-[#E4E7EC] rounded-lg p-4">
            <View className="w-full flex-row items-center justify-start space-x-3">
              <Image
                source={icons.avatarIcon}
                alt="User avatar"
                resizeMode="cover"
                className="w-8 h-8"
              />
              <View className="flex-col items-start justify-start space-y-1">
                <Text className="text-sm font-medium text-black">
                  Honey feed Collections
                </Text>
                <View className="flex-row items-center space-x-3">
                  <Text className="text-sm font-medium text-black">
                    Umu Aisha
                  </Text>
                  <Text className="text-[#997A7A] pl-3">Ilorin Nigeria</Text>
                </View>
              </View>
            </View>
            <View className="flex-col items-start justify-start pt-3 space-y-1">
              <Text className="text-sm font-medium text-black">
                Sellers ratings
              </Text>
              <View className="flex-row items-center justify-start space-x-3">
                <Text className="text-sm font-semibold text-[#98A2B3]">
                  4.0
                </Text>
                <View>
                  <StarRate starIndex={4} totalStar={5} />
                </View>
                <Text className="text-sm font-semibold text-[#98A2B3]">
                  (27)
                </Text>
              </View>
            </View>
            <CustomButton
              title="View Sellers profile"
              containerStyles="bg-primary my-4 w-full py-3"
              titleStyle="text-base font-medium text-black"
            />
            <CustomButton
              handlePress={() => router.push(`/home`)}
              title={
                <View className="flex-row items-center justify-center space-x-2 w-full">
                  <Text className="text-base text-black font-medium">
                    Add seller to favourite
                  </Text>
                  <FontAwesome6 name="heart" size={24} color="black" />
                </View>
              }
              containerStyles="bg-[#FFFAFA] border-2 border-primary py-3 w-full"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductdetailScreen;
