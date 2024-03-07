import { createStackNavigator } from "@react-navigation/stack";
import Register from "@/screens/auth/register";
import VerifyCode from "@/screens/auth/verifyCode";
import Login from "@/screens/auth/login";
import ForgotPassword from "@/screens/auth/forgotPassword";
import OnBoarding from "@/screens/onBoarding";

const Stack = createStackNavigator<AuthStackNavigatorParamList>();

const AuthStack = () => {
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
