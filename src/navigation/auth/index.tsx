import { createStackNavigator } from "@react-navigation/stack";
import Register from "@/screens/auth/register";
import VerifyCode from "@/screens/auth/verifyCode";
import Login from "@/screens/auth/login";
import ForgotPassword from "@/screens/auth/forgotPassword";
import OnBoarding from "@/screens/onBoarding";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator<AuthStackNavigatorParamList>();

const AuthStack = () => {
  const [firstLaunch, setFirstLaunch] = useState<boolean | null>(null);
  useEffect(() => {
    async function setData() {
      const appData = await AsyncStorage.getItem("appLaunched");
      if (appData == null) {
        setFirstLaunch(true);
        AsyncStorage.setItem("appLaunched", "false");
      } else {
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Verify" component={VerifyCode} />
    </Stack.Navigator>
  );
};

export default AuthStack;
