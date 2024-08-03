import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Platform,
  UIManager,
  TouchableOpacity,
  Dimensions,
  Image,
  LayoutAnimation,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { shopData } from "@/constants/data";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome6,
} from "@expo/vector-icons";
import { Fee, formatGBPCurrency } from "@/helpers";
import { CustomButton, CustomizeSwitch, StarRate } from "@/components";
import { icons } from "@/constants";
import useFavouriteStore from "@/store/favorite";
import Toast from "react-native-toast-message";
import { Product } from "@/types";
import { FlatList } from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const { width } = Dimensions.get("window");

const ProductdetailScreen = () => {
  const { slug } = useLocalSearchParams<{ slug?: string }>();
  const data = shopData.find((item) => item.id === slug);

  if (!data) return;
  // const [count, setCount] = useState(1);
  const [showFee, setShowFee] = useState(true);
  const [dropDown, setDropDown] = useState({
    description: true,
  });
  const { toggleFavourite, favouriteItems } = useFavouriteStore();
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const ref = useRef<any>();
  const descriptionRef = useRef<View>(null);
  const scrollViewRef = useRef<ScrollView>(null);

  const slideImages = [
    {
      img: data.product_image,
    },
    {
      img: data.product_image,
    },
    {
      img: data.product_image,
    },
  ];

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slideImages.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  const goToPrevSlide = () => {
    const nextSlideIndex = currentSlideIndex - 1;
    if (nextSlideIndex >= 0) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  // const decrementCount = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

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

  const handleToggleFavourite = (product: Product) => {
    const productWithQuantity = { ...product, quantity: 1 };
    const isFavourite = favouriteItems.some((item) => item.id === product.id);

    toggleFavourite(productWithQuantity);
    Toast.show({
      type: "success",
      text1: isFavourite ? "Removed from Favourite" : "Added to Favourite",
      visibilityTime: 1000,
    });
  };

  const isFavourite = favouriteItems.some((item) => item.id === data.id);

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{
          paddingBottom: 15,
        }}
      >
        <View className="w-full h-[350px]">
          <FlatList
            ref={ref}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            contentContainerStyle={{ height: "100%" }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={slideImages}
            pagingEnabled
            renderItem={({ item }) => (
              <View
                style={{ width: width }}
                className="w-full h-[350px] relative"
              >
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
                <View
                  style={{ width: width }}
                  className="flex-row justify-center items-center my-6 space-x-2 absolute bottom-4 right-0"
                >
                  {/* Render indicator */}
                  {slideImages.map((_, index) => (
                    <View
                      key={index}
                      className={`h-2 rounded-full ${
                        currentSlideIndex == index
                          ? "bg-white w-6"
                          : "w-2 bg-white/50"
                      }`}
                    />
                  ))}
                </View>
              </View>
            )}
          />
        </View>

        <View className="w-full py-5 px-5 flex-col items-start justify-start space-y-6">
          <View className="w-full flex-row items-start justify-between">
            <View className="flex-col items-start justify-start space-y-1">
              <Text className="text-base font-medium text-black">
                {data.title}
              </Text>
              <Text className="text-xl font-normal text-black">
                {formatGBPCurrency(data.price)}
              </Text>
            </View>
            <View className="flex-row items-center justify-end space-x-5">
              <TouchableOpacity onPress={() => handleToggleFavourite(data)}>
                {isFavourite ? (
                  <AntDesign name="heart" size={24} color="#FFCCCC" />
                ) : (
                  <FontAwesome name="heart" size={24} color="black" />
                )}
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
            {/* <View className="bg-primary border border-primary flex-row justify-between py-2 px-3 w-[102px] rounded-full">
              <TouchableOpacity onPress={decrementCount}>
                <AntDesign name="minus" size={16} color="#121212" />
              </TouchableOpacity>
              <Text className="text-sm font-semibold text-black">{count}</Text>
              <TouchableOpacity onPress={incrementCount}>
                <AntDesign name="plus" size={16} color="#121212" />
              </TouchableOpacity>
            </View> */}
          </View>
          <View className="w-full flex-row space-x-4 items-start justify-between">
            <View className="flex-row items-start justify-start space-x-2">
              <CustomizeSwitch
                isOn={showFee}
                onToggle={() => setShowFee(true)}
              />
              <View className="flex-col items-start justify-start space-y-2">
                <Text className="text-xs font-medium text-[#594747]">
                  Buy protection fee <Text className="font-bold">({formatGBPCurrency(Fee)})</Text>
                </Text>
                <Text className="text-[10px] font-medium text-[#98A2B3] max-w-[161px]">
                  This serves as a protection fee for your orders in case of
                  loss or damages
                </Text>
              </View>
            </View>
            <View className="h-14 px-4 bg-[#FFFAFA] border border-primary flex-row items-center justify-center rounded-md">
              <Text className="text-2xl font-normal text-black">
                {formatGBPCurrency(totalPrice)}
              </Text>
            </View>
          </View>
          <View className="w-full">
            <CustomButton
              handlePress={() => router.push(`/checkout/${data.id}/detail`)}
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
              handlePress={() => router.push(`/offer/buyer/${data.id}`)}
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
                <View className="flex-row items-center space-x-3">
                  <Text className="text-sm font-medium text-black">
                    Umu Aisha
                  </Text>
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
              handlePress={() => handleToggleFavourite(data)}
              title={
                <View className="flex-row items-center justify-center space-x-2 w-full">
                  <Text className="text-base text-black font-medium">
                    Add seller to favourite
                  </Text>
                  {isFavourite ? (
                    <AntDesign name="heart" size={24} color="#FFCCCC" />
                  ) : (
                    <FontAwesome6 name="heart" size={24} color="black" />
                  )}
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
