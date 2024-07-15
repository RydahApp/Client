import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const CheckoutLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="checkout/[id]" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
    </>
  );
};

export default CheckoutLayout;
