import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const CheckoutLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="checkout/[id]/detail"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="checkout/[id]/payment"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="checkout/success"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="offer/buyer/[id]"
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
    </>
  );
};

export default CheckoutLayout;
