import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

interface StarProps {
  starIndex: number;
  totalStar: number;
  color?: string;
}

const StarRate: React.FC<StarProps> = ({ starIndex, totalStar, color }) => {
  return (
    <View className="flex-row justify-center items-center space-x-1">
      {/* Render indicator */}
      {Array.from({ length: totalStar }).map((_, index) => (
        <AntDesign
          key={index}
          name="star"
          size={15}
          color={
            starIndex >= index ? `${color ? color : "#E6B8B8"}` : "#272525"
          }
          testID={`star-icon-${index}`}
        />
      ))}
    </View>
  );
};

export default StarRate;
