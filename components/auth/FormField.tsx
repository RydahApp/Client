import { icons } from "@/constants";
import { ReactNode, useState } from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";

type FormType = {
  title: string | ReactNode;
  type?: string;
  titleShow: boolean;
  value: string | undefined;
  placeholder: string;
  handleChangeText: (e: any) => any;
  onBlur?: (e: any) => any;
  otherStyles: string;
  inputStyle?: string;
  keyboardType?: string | any;
  errorClass?: string;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
};

const FormField: React.FC<FormType> = ({
  title,
  type,
  titleShow,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  errorClass,
  keyboardType,
  onBlur,
  multiline,
  numberOfLines,
  inputStyle,
  maxLength,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`} testID="form-field">
      <View className="w-full">
        {titleShow === true && <View className="w-full">{title}</View>}
      </View>
      <View
        className={`w-full h-12 px-4 bg-white rounded border border-[#D0D5DD] focus:border-primary items-center flex-row transition-all duration-300 ${errorClass}`}
        testID="input-container"
      >
        <TextInput
          className={`flex-1 placeholder:text-[#98A2B3] text-dark font-normal text-base h-full w-full ${inputStyle}`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#98A2B3"
          onChangeText={handleChangeText}
          onBlur={onBlur}
          secureTextEntry={type === "Password" && !showPassword}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          testID="text-input"
        />
        {type === "Password" && (
          <TouchableOpacity
            onPress={() => setShowPassword((prev) => !prev)}
            testID="toggle-password-visibility"
          >
            <Image
              source={!showPassword ? icons.eyeSlashIcon : icons.eyeIcon}
              className="w-4 h-4"
              resizeMode="contain"
              tintColor="#000000"
              testID="password-icon"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
