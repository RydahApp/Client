import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useFirstStore from "@/store";

const ProfileScreen = () => {
  const { removeFirstUser } = useFirstStore();
  return (
    <View className="flex-1 bg-white text-center flex-row items-center justify-center">
      <TouchableOpacity onPress={() => removeFirstUser()}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
