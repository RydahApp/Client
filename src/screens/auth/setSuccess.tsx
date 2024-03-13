import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function SetSuccess() {
  return (
    <View>
      <Text>Password reset successful </Text>
      <TouchableOpacity>
        <Text>Proceed to Login</Text>
        <Icon name="error-outline" size={30} color="#CB1A14" />
      </TouchableOpacity>
    </View>
  );
}
