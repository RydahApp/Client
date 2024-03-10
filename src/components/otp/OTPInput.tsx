import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { hp, wp } from "@/utils/dimensions";
import { FONT_WEIGHT } from "@/utils/constants";

type OTPProps = {
  setPinReady: React.Dispatch<React.SetStateAction<boolean>>;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  maxLength: number;
};

type OTPInputProps = {
  digit: string;
};

const OTPInput = ({ digit }: OTPInputProps) => {
  return (
    <View style={styles.otpInput}>
      <Text style={styles.otpInputText}>{digit}</Text>
    </View>
  );
};

const OTPInputField = ({ setPinReady, code, setCode, maxLength }: OTPProps) => {
  const codeDigitArray = new Array(maxLength).fill(0);
  const textInputRef = useRef<typeof TextInput | any>();
  const [isInputBoxFocused, setIsInputFocused] = useState(false);

  const handleOnBlur = () => {
    setIsInputFocused(false);
  };

  const handleOnpress = () => {
    setIsInputFocused(true);
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  useEffect(() => {
    setPinReady(code.length === maxLength);
    return () => setPinReady(false);
  }, [code]);

  return (
    <View>
      <Pressable style={styles.otpInputContainer} onPress={handleOnpress}>
        {codeDigitArray.map((_, index) => (
          <OTPInput key={index} digit={code[index] || ""} />
        ))}
      </Pressable>
      <TextInput
        style={styles.hiddenTextInput}
        value={code}
        maxLength={maxLength}
        onChangeText={setCode}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        ref={textInputRef}
        onBlur={handleOnBlur}
      />
    </View>
  );
};

export default OTPInputField;

const styles = StyleSheet.create({
  otpInputContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: hp(16),
    marginTop: hp(25),
    marginBottom: hp(20),
  },
  otpInput: {
    minWidth: "15%",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: hp(15),
    backgroundColor: "white",
    width: wp(57),
    height: wp(59),
    justifyContent: "center",
  },
  otpInputText: {
    fontSize: hp(22),
    fontFamily: FONT_WEIGHT.bold,
    textAlign: "center",
  },
  hiddenTextInput: {
    width: 1,
    height: 1,
    opacity: 0,
    position: "absolute",
  },
});
