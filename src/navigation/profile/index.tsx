import { createStackNavigator } from "@react-navigation/stack";
import profile from "@/screens/profile";
import success from "@/screens/profile/success";

const Stack = createStackNavigator<ProfileStackNavigationProp>();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profile" component={profile} />
      <Stack.Screen name="success" component={success} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
