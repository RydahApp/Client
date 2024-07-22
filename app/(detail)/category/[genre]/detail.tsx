import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import { shopData } from "@/constants/data";
import { Product } from "@/types";
import useFavouriteStore from "@/store/favorite";
import Toast from "react-native-toast-message";
import { formatNGNCurrency } from "@/helpers";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const GenreDetail = () => {
  const { genre } = useLocalSearchParams<{ genre?: string }>();
  const data = shopData.filter((item) => item.category === genre);
  const [searchQuery, setSearchQuery] = useState<string | any>(genre);

  const filteredData = data
    ? (data as Product[]).filter(
        (item) =>
          (item.title &&
            item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.category &&
            item.category.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : data;

  return (
    <SafeAreaView className="flex-1 px-5 pt-4 bg-white">
      <View className="flex-col items-start justify-start space-y-6 w-full">
        <Text className="text-3xl font-normal text-[#6B5656]">Search</Text>
        <View className="w-full relative">
          <TextInput
            className="w-full bg-white border border-gray-300 focus:border-primary rounded-lg px-12 py-3 text-sm font-normal text-[#98A2B3]"
            placeholder="Search items or members"
            placeholderTextColor="#98A2B3"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Image
            source={icons.searchIcon}
            className="absolute top-[32%] left-[5%]"
            resizeMode="contain"
            tintColor="#667185"
          />
          <Image
            source={icons.filterIcon}
            className="absolute top-[32%] right-[5%]"
            resizeMode="contain"
            tintColor="#667185"
          />
        </View>

        <View className="w-full">
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ProductItemComponet data={item} />}
            numColumns={2}
            columnWrapperStyle={{}}
            ListEmptyComponent={() => (
              <View className="w-full flex-col items-center justify-center h-[80vh]">
                <Image source={images.notFoundImage} alt="" />
                <Text className="text-base text-center font-normal text-black my-6">
                  Search result not found
                </Text>
              </View>
            )}
            // refreshControl={
            //   <RefreshControl
            //     refreshing={refreshing}
            //     onRefresh={onRefresh}
            //     tintColor="#5E30F8"
            //     colors={["#5E30F8"]}
            //   />
            // }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const ProductItemComponet: React.FC<{
  data: Product;
}> = ({ data }) => {
  const navigateToDetailPage = (slug: string) => {
    router.push(`/product/${slug}`);
  };
  const [addingToFavourite, setAddingToFavourite] = useState(false);
  const { addToFavourite } = useFavouriteStore();

  const handleAddToFavourite = (product: Product) => {
    const productWithQuantity = { ...product, quantity: 1 };
    setAddingToFavourite(true);
    addToFavourite(productWithQuantity);
    Toast.show({
      type: "success",
      text1: "Added to Favourite",
      visibilityTime: 1000,
    });
    setTimeout(() => {
      setAddingToFavourite(false);
    }, 1000);
  };

  return (
    <View className="pb-3 mr-5">
      <View className="space-y-3 flex-col items-start justify-start">
        <TouchableOpacity
          onPress={() => navigateToDetailPage(data.id)}
          className="w-[147px] aspect-square rounded-lg"
        >
          <Image
            source={data.product_image}
            className="w-full h-full rounded-lg"
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View className="w-full space-y-2">
          <Text className="text-sm font-medium text-[#212121]">
            {data.title.substring(0, 18)}
          </Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-xs font-medium text-[#212121]">
              {formatNGNCurrency(data.price)}
            </Text>
            <TouchableOpacity onPress={() => handleAddToFavourite(data)}>
              {addingToFavourite ? (
                <AntDesign name="heart" size={20} color="#FFCCCC" />
              ) : (
                <FontAwesome5 name="heart" size={14} color="#FFCCCC" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GenreDetail;
