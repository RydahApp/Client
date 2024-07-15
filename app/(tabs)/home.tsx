import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";
import { icons } from "@/constants";
import { Feather, FontAwesome5, Fontisto } from "@expo/vector-icons";
import { shopCategory, shopData } from "@/constants/data";
import { ProductItem } from "@/components";

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  return (
    <SafeAreaView className="bg-white flex-1 pt-10">
      <ScrollView>
        <View className="w-full px-5 flex-row items-center justify-between">
          <View className="relative flex-row space-x-3 items-center justify-start">
            <View className="relative w-14 h-14 flex-row items-center justify-center bg-primary rounded-full">
              <Image source={icons.avatarIcon} alt="profile avatar" />
              <View className="w-4 h-4 bg-[#04802E] rounded-full border border-white absolute right-1 bottom-[1px]" />
            </View>
            <View className="flex-col items-start justify-start">
              <Text className="text-lg font-normal text-black">
                Aisha Uthman
              </Text>
              <Text className="text-xs font-medium text-black">
                Aisha Ventures
              </Text>
            </View>
          </View>
          <View className="flex-row items-center justify-end space-x-6">
            <TouchableOpacity>
              <FontAwesome5 name="heart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Fontisto name="bell" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="w-full pt-8 pb-4 pl-4 border-b border-[#F0F2F5]">
          <FlatList
            data={shopCategory}
            horizontal
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View className="mr-2 mb-2">
                <TouchableOpacity
                  onPress={() => setSelectedCategory(item)}
                  className={`h-[29px] flex-row items-center justify-center px-4 rounded-full transition-all duration-300 ${
                    item === selectedCategory ? "bg-black" : "bg-primary"
                  }`}
                >
                  <Text
                    className={`text-sm font-bold transition-all duration-300 ${
                      item === selectedCategory ? "text-white" : "text-grey-600"
                    }`}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View className="pt-4 flex-col items-start w-full space-y-5">
          <View className="w-full px-4">
            <View className="w-full bg-primary p-4 rounded flex-row items-center justify-between">
              <Text className="text-sm font-normal text-black">
                Recommended for you
              </Text>
              <TouchableOpacity className="flex-row items-center justify-start space-x-2">
                <Text className="text-sm font-semibold">See all</Text>
                <Feather name="chevron-right" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-full pl-4">
            <FlatList
              data={shopData.slice(0, 4)}
              horizontal
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View className="mr-5 mb-4">
                  <ProductItem data={item} />
                </View>
              )}
            />
          </View>
        </View>
        <View className="flex-col items-start w-full space-y-5">
          <View className="w-full px-4">
            <View className="w-full bg-primary p-4 rounded flex-row items-center justify-between">
              <Text className="text-sm font-normal text-black">
                Top deals for you
              </Text>
            </View>
          </View>
          <View className="w-full pl-4">
            <FlatList
              data={shopData.slice(4, 6)}
              horizontal
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View className="mr-5 mb-8">
                  <ProductItem data={item} />
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
