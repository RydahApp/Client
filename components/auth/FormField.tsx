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
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <View className="w-full">
        {titleShow === true && (
          <View className="w-full">{title}</View>
        )}
      </View>
      <View
        className={`w-full h-12 px-4 bg-white rounded border border-[#D0D5DD] focus:border-primary items-center flex-row transition-all duration-300 ${errorClass}`}
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
        />
        {type === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              source={!showPassword ? icons.eyeSlashIcon : icons.eyeIcon}
              className="w-4 h-4"
              resizeMode="contain"
              tintColor="#000000"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
