import { FONT_WEIGHT } from "@/utils/constants";
import { hp, wp } from "@/utils/dimensions";
import { StyleSheet } from "react-native";

export const authstyles = StyleSheet.create({
  forgotPasswordTextContainer: {
    margin: hp(20),
    marginTop: hp(40),
    gap: 10,
    alignItems: "center",
  },
  forgotPasswordTitle: {
    fontFamily: FONT_WEIGHT.bold,
    fontSize: hp(25),
  },
  forgotPasswordSubtitle: {
    fontSize: hp(15),
    color: "gray",
  },
  input: {
    width: "100%",
    height: hp(50),
    borderRadius: wp(8),
    backgroundColor: "#C4C4C433",
    paddingHorizontal: wp(10),
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  passwordInput: {
    width: "100%",
    height: "100%",
  },
});
