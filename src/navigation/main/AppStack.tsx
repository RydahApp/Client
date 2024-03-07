import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Feather,
  Ionicons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import HomeStack from "../home";
import ProfileStack from "../profile";
import CartStack from "../cart";
import { COLORS } from "@/utils/constants";

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: {
          color: "#6C6D6D",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialIcons
                name="home-filled"
                size={24}
                color={COLORS.primary.main}
              />
            ) : (
              <Feather name="home" size={24} color={COLORS.primary.main} />
            ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={24}
              color={COLORS.primary.main}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={focused ? "user-alt" : "user"}
              size={24}
              color={COLORS.primary.main}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
