import { icons } from "@/constants";
import { ReactNode } from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";

type CustomizeBtn = {
  title: ReactNode;
  handlePress?: () => void;
  containerStyles: string;
  isLoading?: boolean;
  disabled?: boolean;
};

const CustomButton: React.FC<CustomizeBtn> = ({
  title,
  handlePress,
  containerStyles,
  isLoading,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      accessibilityRole="button"
      className={`rounded-lg min-h-[36px] flex-row space-x-2 justify-center items-center ${containerStyles} ${
        isLoading || disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled || isLoading}
    >
      {isLoading && (
        <Image
          source={icons.whiteLoadingIcon}
          resizeMode="cover"
          className="w-6 h-6"
          accessibilityRole="image"
        />
      )}
      <View className="w-fit">
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
