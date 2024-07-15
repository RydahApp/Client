import { formatNGNCurrency } from "@/helpers";
import { Product } from "@/types";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";

type ProductType = {
  data: Product;
};

const ProductItem: React.FC<ProductType> = ({ data }) => {
  const navigateToDetailPage = (slug: string) => {
    router.push(`/product/${slug}`);
  };

  return (
    <View className="mx-auto pb-3">
      <View className="space-y-3 flex-col">
        <TouchableOpacity
          onPress={() => navigateToDetailPage(data.id)}
          className="w-[124px] aspect-square rounded-lg"
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
            <TouchableOpacity>
              <FontAwesome5 name="heart" size={14} color="#FFCCCC" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
