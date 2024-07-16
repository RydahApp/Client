import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { shopData } from "@/constants/data";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { Fee, formatNGNCurrency } from "@/helpers";
import { CustomButton } from "@/components";
import { useState } from "react";
import { icons, images } from "@/constants";

const CheckoutScreen = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const [shippingMethod, setShippingMethod] = useState("Collection");

  const data = shopData.find((item) => item.id === id);

  if (!data) return;

  const totalPrice = data.price + Fee;

  const shippingMethodData = [
    {
      event: (
        <View className="flex-row items-start justify-start space-x-4">
          <View className="flex-row items-center">
            {shippingMethod === "Collection" ? (
              <FontAwesome5 name="dot-circle" size={18} color="#000" />
            ) : (
              <Entypo name="circle" size={18} color="#98A2B3" />
            )}
          </View>
          <View className="flex-col items-start justify-start space-y-1">
            <Text className="text-sm font-medium text-black">Collection</Text>
            <Text className="text-xs font-normal text-[#98A2B3]">
              This enables you to go pick up the item from the seller
            </Text>
          </View>
        </View>
      ),
      value: "Collection",
    },
    {
      event: (
        <View className="flex-row items-start justify-start space-x-4">
          <View className="flex-row items-center">
            {shippingMethod === "Delivery" ? (
              <FontAwesome5 name="dot-circle" size={18} color="#000" />
            ) : (
              <Entypo name="circle" size={18} color="#98A2B3" />
            )}
          </View>
          <View className="flex-col items-start justify-start space-y-1">
            <Text className="text-sm font-medium text-black">Delivery</Text>
            <Text className="text-xs font-normal text-[#98A2B3]">
              This item will be delivered to your preferred location
            </Text>
          </View>
        </View>
      ),
      value: "Delivery",
    },
  ];

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingTop: 25,
          paddingBottom: 25,
          paddingHorizontal: 20,
        }}
        className="w-full flex-col space-y-6"
      >
        <View className="w-full flex-row items-center justify-between space-x-10">
          <TouchableOpacity onPress={() => router.back()}>
            <Entypo name="chevron-thin-left" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-base font-medium text-black w-[60%]">
            Check out
          </Text>
        </View>
        <Image
          source={data.product_image}
          resizeMode="cover"
          className="w-[248px] h-[225px] rounded-lg mx-auto"
        />
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
        <View className="w-full flex-col space-y-3">
          <View className="flex-row items-center justify-between space-x-2 w-full border border-primary p-3 rounded-lg">
            <Text className="text-sm text-black font-normal">Item price</Text>
            <Text className="text-sm text-[#6B5656] font-medium">
              {formatNGNCurrency(totalPrice)}
            </Text>
          </View>
          <View className="flex-row items-center justify-between space-x-2 w-full border border-primary p-3 rounded-lg">
            <Text className="text-sm text-black font-normal">
              Buyer protection fee
            </Text>
            <Text className="text-sm text-[#6B5656] font-medium">
              {formatNGNCurrency(totalPrice)}
            </Text>
          </View>
          <View className="flex-row items-center justify-between space-x-2 w-full border border-primary p-3 rounded-lg">
            <Text className="text-sm text-black font-normal">Delivery fee</Text>
            <Text className="text-sm text-[#6B5656] font-medium">
              {formatNGNCurrency(totalPrice)}
            </Text>
          </View>
        </View>
        <View className="w-full flex flex-col items-start justify-start space-y-3">
          <Text className="text-sm font-normal text-black">
            Choose shipment option
          </Text>
          <View className="w-full p-4 bg-[#FFF7F7] rounded-lg border border-[#98A2B3] flex-col items-start justify-start space-y-2">
            {shippingMethodData.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setShippingMethod(item.value)}
                className="w-full relative"
              >
                {item.event}
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View className="flex-row items-center justify-between space-x-2 w-full border border-primary p-3 rounded-lg">
          <Text className="text-sm text-black font-normal">Total</Text>
          <Text className="text-sm text-[#6B5656] font-medium">
            {formatNGNCurrency(totalPrice)}
          </Text>
        </View>
        <View className="w-full p-4 bg-[#FFF7F7] rounded-lg border border-black flex-col items-start justify-start space-y-2">
          <View className="flex-row items-center justify-start space-x-2">
            <View className="w-8 h-8 rounded-lg flex-row items-center justify-center bg-white">
              <MaterialIcons name="location-on" size={18} color="black" />
            </View>
            <Text className="text-sm font-semibold text-black">
              Shipping address
            </Text>
          </View>
          <Text className="text-xs font-normal text-[#98A2B3]">
            No 30, Stadium Road,. Off Taiwo Road,. Ilorin, Kwara State, Nigeria
          </Text>
          <View className="flex-row items-center justify-start space-x-2">
            <View className="w-8 h-8 rounded-lg flex-row items-center justify-center bg-white">
              <Image
                source={icons.editPenIcon}
                alt="edit"
                resizeMode="cover"
                width={20}
              />
            </View>
            <Text className="text-xs font-medium text-black">
              Change shipping address
            </Text>
          </View>
        </View>
        <View className="w-full p-4 bg-primary rounded-lg border border-[#E4E7EC] flex-row items-start justify-start space-x-2">
          <Image
            source={icons.warningIcon}
            alt="warning icon"
            resizeMode="cover"
            className="w-7 h-7"
          />
          <Text className="text-xs font-medium text-black max-w-[250px]">
            If you, as the buyer, do not click on the 'received items' button,
            the seller will wait for a few working days (typically 4 days).
            During this time, you will receive reminders prompting you to
            confirm receipt of the item. However, if you fail to confirm within
            this timeframe, the seller will receive the payment after 4 working
            days.
          </Text>
        </View>
        <View className="flex-row items-start justify-between space-x-4 w-full px-4 border border-[#98A2B3] py-2 bg-[#FFF7F7] rounded-lg">
          <View className="flex-row items-center space-x-3">
            <Image
              source={images.applePaymentImage}
              alt="Apple pay image"
              resizeMode="contain"
            />
            <View className="flex-col items-start justify-start space-y-1">
              <Text className="text-sm font-medium text-black">Apple pay</Text>
              <Text className="text-xs font-normal text-[#98A2B3]">
                Make payment with Apple pay
              </Text>
            </View>
          </View>
          <FontAwesome5 name="dot-circle" size={18} color="#000" />
        </View>
        <CustomButton
          title="Make payment"
          containerStyles="bg-primary my-4 w-full py-3"
          titleStyle="text-base font-medium text-black"
          handlePress={() => router.push(`/checkout/${data.id}/payment`)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
