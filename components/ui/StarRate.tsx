import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

interface StarProps {
  starIndex: number;
  totalStar: number;
}

const StarRate: React.FC<StarProps> = ({ starIndex, totalStar }) => {
  return (
    <View className="flex-row justify-center items-center space-x-1">
      {/* Render indicator */}
      {Array.from({ length: totalStar }).map((_, index) => (
        <AntDesign
          key={index}
          name="star"
          size={18}
          color={starIndex >= index ? "#E6B8B8" : "#272525"}
        />
      ))}
    </View>
  );
};

export default StarRate;
