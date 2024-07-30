import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { shopData } from "@/constants/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { cardNumberFormatter, expirationDateFormatter, Fee, formatGBPCurrency } from "@/helpers";
import { Entypo } from "@expo/vector-icons";
import { icons, images } from "@/constants";
import { useFormik } from "formik";
import { creditFormSchema } from "@/schema";
import { creditCardFormValueType } from "@/types";
import { CustomButton, FormField } from "@/components";

const PaymentScreen = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const data = shopData.find((item) => item.id === id);

  if (!data) return;

  const totalPrice = data.price + Fee;

  const initialValues: creditCardFormValueType = {
    card_number: "",
    cardholder_name: "",
    expiry_date: "",
    cvv: "",
  };

  const onSubmit = (payload: creditCardFormValueType, action: any) => {
    console.log(payload);

    router.push(`/checkout/success`);

    action.resetForm();
  };

  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: creditFormSchema,
    onSubmit,
  });

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingTop: 25,
          paddingBottom: 25,
          paddingHorizontal: 20,
        }}
        className="w-full flex-col space-y-6"
      >
        <View className="w-full flex-row items-center justify-between space-x-10">
          <TouchableOpacity onPress={() => router.back()}>
            <Entypo name="chevron-thin-left" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-base font-medium text-black w-[60%]">
            Payment
          </Text>
        </View>
        <View className="w-full flex-col items-center justify-center space-y-5 pt-8">
          <Text className="text-3xl font-bold text-black">
            {formatGBPCurrency(totalPrice)}
          </Text>
          <View className="flex-row items-start justify-between space-x-4 w-full px-4 border border-primary py-2 bg-primary rounded-lg">
            <View className="flex-row items-center space-x-3">
              <Image
                source={images.applePaymentImage}
                alt="Apple pay image"
                resizeMode="contain"
              />
              <View className="flex-col items-start justify-start space-y-1">
                <Text className="text-sm font-medium text-black">
                  Apple pay
                </Text>
                <Text className="text-xs font-normal text-black">
                  Make payment with Apple pay
                </Text>
              </View>
            </View>
          </View>

          <View className="w-full flex-col space-y-2 items-center justify-center">
            <View className="w-full relative">
              <FormField
                title={
                  <Text className="text-sm font-medium text-black">
                    Card number
                  </Text>
                }
                titleShow={true}
                value={values.card_number}
                handleChangeText={(text) => {
                  const newValue = cardNumberFormatter(
                    values.card_number,
                    text
                  );
                  setFieldValue("card_number", newValue);
                }}
                onBlur={handleBlur("card_number")}
                otherStyles="mt-4"
                placeholder="0000    0000    0000    0000"
                keyboardType="numeric"
                maxLength={19}
                errorClass={`${
                  touched.card_number && errors.card_number
                    ? "!border-red-500"
                    : ""
                } !h-14`}
              />
              <View className="flex-row items-center justify-start space-x-2 absolute top-[64%] right-[6%]">
                <Image source={icons.cardIcon} resizeMode="contain" />
              </View>
            </View>
            <View className="w-full relative">
              <FormField
                title={
                  <Text className="text-sm font-medium text-black">
                    Cardholder name
                  </Text>
                }
                titleShow={true}
                value={values.cardholder_name}
                handleChangeText={handleChange("cardholder_name")}
                onBlur={handleBlur("cardholder_name")}
                otherStyles="mt-4"
                placeholder="Enter your cardholder name"
                keyboardType="default"
                maxLength={50}
                errorClass={`${
                  touched.cardholder_name && errors.cardholder_name
                    ? "!border-red-500"
                    : ""
                } !h-14`}
              />
              <View className="flex-row items-center justify-start space-x-2 absolute top-[64%] right-[6%]">
                <Image source={icons.holderIcon} resizeMode="contain" />
              </View>
            </View>
            <View className="w-full flex-row items-start justify-start space-x-3">
              <FormField
                title={
                  <Text className="text-sm font-medium text-black">
                    Expiry date
                  </Text>
                }
                titleShow={true}
                value={values.expiry_date}
                handleChangeText={(text) => {
                  const newValue = expirationDateFormatter(
                    values.expiry_date,
                    text
                  );
                  setFieldValue("expiry_date", newValue);
                }}
                onBlur={handleBlur("expiry_date")}
                otherStyles="mt-4 w-2/5"
                placeholder="M  M  /  Y  Y"
                keyboardType="numeric"
                maxLength={5}
                errorClass={`${
                  touched.expiry_date && errors.expiry_date
                    ? "!border-red-500"
                    : ""
                } !h-14`}
              />
              <View className="flex-grow relative">
                <FormField
                  title={
                    <Text className="text-sm font-medium text-black">
                      CVV / CVC
                    </Text>
                  }
                  titleShow={true}
                  value={values.cvv}
                  handleChangeText={handleChange("cvv")}
                  onBlur={handleBlur("cvv")}
                  otherStyles="mt-4"
                  placeholder="3-4 digits"
                  keyboardType="numeric"
                  maxLength={3}
                  errorClass={`${
                    touched.cvv && errors.cvv ? "!border-red-500" : ""
                  } !h-14`}
                />
                <View className="flex-row items-center justify-start space-x-2 absolute top-[64%] right-[6%]">
                  <Image source={icons.cvvIcon} resizeMode="contain" />
                </View>
              </View>
            </View>
            <Text className="py-4 text-sm font-medium text-[#98A2B3] text-center max-w-[240px]">
              We will send you an order details to email after the successful
              payment
            </Text>
            <CustomButton
              title="Submit"
              containerStyles="bg-primary mt-3 w-full py-3"
              titleStyle="text-base font-medium text-black"
              isLoading={isSubmitting}
              handlePress={handleSubmit}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;
