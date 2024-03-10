import { FONT_WEIGHT } from "@/utils/constants";
import { hp, wp } from "@/utils/dimensions";
import { StyleSheet } from "react-native";

export const authstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: hp(30),
    gap: hp(20),
  },
  inputContainer: {
    height: hp(50),
    borderColor: "#D0D5DD",
    borderWidth: 1,
    borderRadius: wp(8),
    paddingHorizontal: wp(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  passwordContainer: {},
  input: {
    flex: 1,
    height: "100%",
  },
  inputFormTitle: {
    fontFamily: FONT_WEIGHT.medium,
    fontSize: hp(12),
    marginBottom: hp(8),
  },
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
});
