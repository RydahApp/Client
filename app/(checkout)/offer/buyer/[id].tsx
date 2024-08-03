import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { messagesData, shopData } from "@/constants/data";
import { Fee, formatGBPCurrency } from "@/helpers";
import { Entypo } from "@expo/vector-icons";
import { CustomButton, CustomizeSwitch } from "@/components";
import { Product } from "@/types";

const OfferBuyerdetailpage = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const data = shopData.find((item) => item.id === id);
  const [showFee, setShowFee] = useState(true);

  if (!data) return;

  const totalPrice = data.price + Fee;

  const handleMakeOffer = (product: Product) => {
    const offerMessage = {
      id: `${messagesData.length + 1}`,
      sender: "John doe",
      receiver: "Seller",
      content: `New Offer ${product.id}`,
      is_read: false,
      product
    };

    // Append the offer message to messagesData
    messagesData.push(offerMessage);

    // Redirect to the seller's message details page
    router.push(`/message/${offerMessage.id}`);
  };

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
          <Text className="text-lg font-normal text-black w-[65%]">
            Make an offer
          </Text>
        </View>
        <Image
          source={data.product_image}
          resizeMode="cover"
          className="w-[248px] h-[225px] rounded-lg mx-auto"
        />
        <View className="flex-row items-center justify-between space-x-3 w-full">
          <Text className="text-base font-normal text-black">{data.title}</Text>
          <Text className="text-xl font-medium text-black">
            {formatGBPCurrency(totalPrice)}
          </Text>
        </View>
        <View className="flex-row items-start justify-start space-x-2">
          <CustomizeSwitch isOn={showFee} onToggle={() => setShowFee(true)} />
          <View className="flex-col items-start justify-start space-y-1">
            <Text className="text-sm font-medium text-[#594747]">
              Buy protection fee{" "}
              <Text className="font-bold">({formatGBPCurrency(Fee)})</Text>
            </Text>
            <Text className="text-xs font-medium text-[#4E4E4E] max-w-[271px]">
              This serves as a protection fee for your orders in case of loss or
              damages
            </Text>
          </View>
        </View>
        <View className="w-full flex-col items-center justify-center space-y-2">
          <Text className="text-sm font-medium text-[#101928]">Your offer</Text>
          <CustomButton
            title={formatGBPCurrency(totalPrice)}
            titleStyle="text-3xl font-bold text-black"
            containerStyles="bg-[#FFF7F7] border-2 border-primary py-4 my-4 w-full"
          />
          <View className="w-full">
            <CustomButton
              handlePress={() => handleMakeOffer(data)}
              title="Send Offer"
              titleStyle="font-semibold"
              containerStyles="bg-primary py-3 mb-3 w-full"
            />
            <CustomButton
              handlePress={() => router.back()}
              title="Cancel"
              titleStyle="font-semibold"
              containerStyles="bg-white border-2 border-primary py-3 w-full"
            />
          </View>
          <Text className="text-sm py-3 text-center text-[#667185] font-medium max-w-[280px]">
            This gives you the avenue negotiate the price of items with the
            seller
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OfferBuyerdetailpage;
