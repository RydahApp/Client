import { CustomButton } from "@/components";
import { onBoardingSlides } from "@/constants/data";
import useFirstStore from "@/store";
import { onBoardType } from "@/types";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const OnboardingScreen = () => {
  const { isAppFirstLaunched, setIsAppFirstLaunched } = useFirstStore();
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const ref = useRef<any>();

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != onBoardingSlides.length) {
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

  const Slide = ({ item }: { item: onBoardType }) => {
    return (
      <View
        style={{ width: width }}
        className="flex-col relative items-center justify-between h-full"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          className="w-full h-[350px]"
        />
        <View className="bg-white w-full rounded-tr-2xl rounded-tl-2xl flex-1 flex-col items-start justify-between py-6 px-6">
          <View className="w-full flex-col space-y-3 items-start justify-start">
            <Text className="text-2xl font-normal text-[#010101] text-start">
              {item.title}
            </Text>
            <Text className="text-start text-base font-normal text-[#666666]">
              {item.subtitle}
            </Text>
          </View>
          <View className="w-full flex-col items-start justify-start space-y-6">
            <View className="flex-row justify-center items-center my-6 space-x-2">
              {/* Render indicator */}
              {onBoardingSlides.map((_, index) => (
                <View
                  key={index}
                  className={`h-2 rounded-full ${
                    currentSlideIndex == index
                      ? "bg-[#CCA3A3] w-6"
                      : "w-2 bg-black"
                  }`}
                />
              ))}
            </View>
            {currentSlideIndex == onBoardingSlides.length - 1 ? (
              <View className="flex-row items-center justify-between w-full">
                <TouchableOpacity
                  onPress={goToPrevSlide}
                  activeOpacity={0.7}
                  className=""
                >
                  <Text>Back</Text>
                </TouchableOpacity>
                <CustomButton
                  handlePress={() => router.push("/register")}
                  title={
                    <View className="flex-row items-end justify-center space-x-2">
                      <Text className="font-medium">Get started</Text>
                      <AntDesign name="arrowright" size={16} color="black" />
                    </View>
                  }
                  containerStyles="bg-primary px-3"
                />
              </View>
            ) : (
              <View className="flex-row items-center justify-between w-full">
                <TouchableOpacity
                  onPress={goToPrevSlide}
                  activeOpacity={0.7}
                  className=""
                >
                  <Text>Back</Text>
                </TouchableOpacity>
                <CustomButton
                  handlePress={() => goToNextSlide()}
                  title={
                    <View className="flex-row items-end justify-center space-x-2">
                      <Text className="font-medium">Get started</Text>
                      <AntDesign name="arrowright" size={16} color="black" />
                    </View>
                  }
                  containerStyles="bg-primary px-3"
                />
              </View>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView className="bg-white flex-1">
        <ScrollView
          contentContainerStyle={{
            width: "100%",
            height: "100%",
          }}
        >
          <FlatList
            ref={ref}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            contentContainerStyle={{ height: "100%" }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={onBoardingSlides}
            pagingEnabled
            renderItem={({ item }) => <Slide item={item} />}
          />
        </ScrollView>
      </SafeAreaView>
      <StatusBar backgroundColor="#FFFF" style="dark" />
    </>
  );
};

export default OnboardingScreen;
