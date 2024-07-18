import { CustomButton } from "@/components";
import { icons, images } from "@/constants";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Notify = () => {
  const id = "classic_brown_bag0192393291203";
  const [delivered, setDelivered] = useState(false);
  const [showConfirmDeliver, setShowConfirmDeliver] = useState(false);

  const screenHeight = Dimensions.get("window").height;

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
            Notification
          </Text>
        </View>
        <View className="w-full flex-col items-center justify-start space-y-6">
          {[0, 1, 2, 3].map((_, index) => (
            <View
              key={index}
              className="w-full p-5 border border-[#505050] bg-[#FFF7F7] rounded-lg flex-col items-start justify-start space-y-3"
            >
              <Image
                source={images.productImage1}
                alt="Product Image"
                resizeMode="cover"
                className="w-full h-[154px] rounded-lg"
              />
              <View className="w-full flex-row items-start justify-start space-x-3">
                <View className="w-10 h-10 flex-row items-center justify-center rounded bg-primary border border-[#F0F2F5]">
                  <Image
                    source={icons.cartIcon}
                    alt="cart icon"
                    resizeMode="contain"
                  />
                </View>
                <View className="flex-col items-start justify-start space-y-2">
                  <Text className="text-xs font-medium text-black">
                    Your order request for the item has been confirmed by the
                    seller
                  </Text>
                  <View className="flex-col space-y-1">
                    <Text className="text-xs text-[#4E4E4E] font-normal">
                      Buyer’s name: Aisha Uthman
                    </Text>
                    <Text className="text-xs text-[#4E4E4E] font-normal">
                      Price: $ 7,600
                    </Text>
                    <Text className="text-xs text-[#4E4E4E] font-normal">
                      Quantity: 1
                    </Text>
                  </View>
                </View>
              </View>
              {delivered ? (
                <View className="w-full">
                  <CustomButton
                    title={
                      <View className="flex-row items-center justify-center space-x-2 w-full">
                        <Feather name="check" size={16} color="black" />
                        <Text className="text-base text-black font-medium">
                          Delivered
                        </Text>
                      </View>
                    }
                    containerStyles="bg-primary py-3 mb-3 w-full"
                  />
                </View>
              ) : (
                <View className="w-full">
                  <CustomButton
                    handlePress={() => setShowConfirmDeliver(true)}
                    title={
                      <View className="flex-row items-center justify-center space-x-2 w-full">
                        <Image
                          source={icons.buyCheckIcon}
                          alt="buy icon"
                          resizeMode="contain"
                        />
                        <Text className="text-base text-black font-medium">
                          Confirm item delivery
                        </Text>
                      </View>
                    }
                    containerStyles="bg-primary py-3 mb-3 w-full"
                  />
                  <CustomButton
                    title={
                      <View className="flex-row items-center justify-center space-x-2 w-full">
                        <Feather name="calendar" size={16} color="black" />
                        <Text className="text-base text-black font-semibold">
                          Delivery date: 05 - 02 - 2024
                        </Text>
                      </View>
                    }
                    containerStyles="bg-[#FFEFEF] py-3 mb-3 w-full"
                  />
                  <CustomButton
                    title={
                      <View className="flex-row items-center justify-center space-x-2 w-full">
                        <AntDesign
                          name="closecircleo"
                          size={16}
                          color="black"
                        />
                        <Text className="text-base text-black font-semibold">
                          Cancel order
                        </Text>
                      </View>
                    }
                    containerStyles="bg-[#FFEFEF] py-3 w-full"
                  />
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
      {showConfirmDeliver && (
        <View
          style={{
            position: "absolute",
            top: 40,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: "#fff",
            elevation: 3,
            zIndex: 9999,
            width: "100%",
            maxHeight: screenHeight,
            flexGrow: 1,
          }}
          className="flex-col items-center justify-center space-y-5"
        >
          <Text className="text-base font-normal text-black mb-3">
            Your ordered item has been delivered?
          </Text>
          <Text className="text-sm text-center max-width-[270px] font-normal text-black mb-3">
            This ascertain that the item you ordered has been delivered by the
            seller
          </Text>
          <View className="w-full flex-row items-center justify-center space-x-4">
            <View>
              <CustomButton
                title="Confirm"
                containerStyles="bg-primary my-8 w-fit px-6 py-3"
                titleStyle="text-sm font-medium text-black"
                handlePress={() => {
                  setDelivered(true);
                  setShowConfirmDeliver(false);
                }}
              />
            </View>
            <View>
              <CustomButton
                title="Cancel"
                containerStyles="bg-white border border-[#98A2B3] w-fit px-6 py-3"
                titleStyle="text-sm font-medium text-black"
                handlePress={() => setShowConfirmDeliver(false)}
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Notify;
