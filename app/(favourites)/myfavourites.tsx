import { CustomButton } from "@/components";
import { images } from "@/constants";
import { formatNGNCurrency } from "@/helpers";
import useFavouriteStore from "@/store/favorite";
import { Product } from "@/types";
import { AntDesign, Entypo, FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

const MyFavouritesScreen = () => {
  const { favouriteItems } = useFavouriteStore();

  return (
    <SafeAreaView className="bg-white flex-1 pt-5 pb-10">
      <View className="w-full flex-row items-center justify-between space-x-10 border-b px-4 pb-6 border-[#F0F2F5]">
        <TouchableOpacity onPress={() => router.back()}>
          <Entypo name="chevron-thin-left" size={24} color="black" />
        </TouchableOpacity>
        <View className="flex-row items-center space-x-2  w-[60%]">
          <AntDesign name="heart" size={20} color="#FFCCCC" />
          <Text className="text-base font-normal text-black">Favourites</Text>
        </View>
      </View>
      <View className="w-full py-6">
        <FlatList
          data={favouriteItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FavouriteProductItem data={item} />}
          numColumns={2}
          columnWrapperStyle={{ paddingHorizontal: 12 }}
          ListEmptyComponent={() => (
            <View className="w-full flex-col items-center justify-center h-[80vh]">
              <Image source={images.notFoundImage} alt="" />
              <Text className="text-base text-center font-normal text-black my-6">
                No favourites added yet
              </Text>
              <View>
                <CustomButton
                  handlePress={() => router.replace(`/home`)}
                  title={
                    <View className="flex-row items-center justify-center space-x-2">
                      <Text className="text-base text-black font-medium">
                        Go to market
                      </Text>
                      <FontAwesome6
                        name="arrow-right-long"
                        size={18}
                        color="black"
                      />
                    </View>
                  }
                  containerStyles="bg-primary px-3"
                />
              </View>
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
    </SafeAreaView>
  );
};

const FavouriteProductItem: React.FC<{
  data: Product;
}> = ({ data }) => {
  const navigateToDetailPage = (slug: string) => {
    router.push(`/product/${slug}`);
  };

  const { deleteFavouriteItem } = useFavouriteStore();

  return (
    <View className="mr-auto pb-3">
      <View className="space-y-3 flex-col">
        <TouchableOpacity
          onPress={() => navigateToDetailPage(data.id)}
          className="w-[157px] aspect-square rounded-lg"
          testID="product-image"
        >
          <Image
            source={data.product_image}
            className="w-full h-full rounded-lg"
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View className="w-full space-y-2">
          <Text
            className="text-sm font-medium text-[#212121]"
            testID="product-title"
          >
            {data.title.substring(0, 18)}
          </Text>
          <View className="flex-row items-center justify-between">
            <Text
              className="text-xs font-medium text-[#212121]"
              testID="product-price"
            >
              {formatNGNCurrency(data.price)}
            </Text>
            <TouchableOpacity
              testID="heart-icon"
              onPress={() => {
                deleteFavouriteItem(data.id);
                Toast.show({
                  type: "success",
                  text1: "Removed to Favourite",
                  visibilityTime: 1000,
                });
              }}
            >
              <AntDesign name="heart" size={20} color="#FFCCCC" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyFavouritesScreen;
