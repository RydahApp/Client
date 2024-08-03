import { CustomButton } from "@/components";
import { icons } from "@/constants";
import { messagesData } from "@/constants/data";
import { messageType } from "@/types";
import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MessagesScreen = () => {
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState<messageType[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();

  const filteredMessages = messages.filter(
    (message) =>
      message.sender.toLowerCase().includes(search.toLowerCase()) ||
      message.content.toLowerCase().includes(search.toLowerCase())
  );

  const handlePress = (message: messageType) => {
    router.push(`/message/${message.id}`);
  };

  return (
    <SafeAreaView className="w-full flex-1 bg-white">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="w-full px-5 py-5 flex-col space-y-4">
          <View
            className={`w-full flex-row items-center ${
              messages.length !== 0 ? "justify-between" : "justify-center"
            }`}
          >
            <Text className="text-2xl font-normal text-black">Messages</Text>
            {messages.length !== 0 && (
              <TouchableOpacity onPress={() => setShowSearch((prev) => !prev)}>
                <Image
                  source={icons.searchIcon}
                  resizeMode="contain"
                  tintColor="#000000"
                />
              </TouchableOpacity>
            )}
          </View>
          {showSearch && (
            <View className="w-full relative">
              <TextInput
                className="w-full bg-white border border-gray-300 focus:border-primary rounded-lg px-12 py-3 text-sm font-normal text-[#98A2B3]"
                placeholder="Search items or members"
                placeholderTextColor="#98A2B3"
                value={search}
                onChangeText={setSearch}
              />
              <Image
                source={icons.searchIcon}
                className="absolute top-[32%] left-[5%]"
                resizeMode="contain"
                tintColor="#667185"
              />
            </View>
          )}
        </View>
        <View className="w-full">
          <FlatList
            data={filteredMessages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handlePress(item)}
                className="flex-row items-start justify-start space-x-4 border-b border-black/10 py-4 px-5"
              >
                <View className="w-12 h-12 bg-[#FFECE5] flex-row items-center justify-center rounded-full relative">
                  <FontAwesome6 name="user-large" size={20} color="black" />
                  {!item.is_read && (
                    <View className="absolute bottom-0 right-1 w-3 h-3 bg-[#4E4E4E] rounded-full border border-white" />
                  )}
                </View>
                <View className="w-full">
                  <View className="w-[80%] flex-row items-center justify-between">
                    <Text className="font-bold">{item.sender}</Text>
                    <Text className="text-xs font-normal text-gray-400">
                      4 min ago
                    </Text>
                  </View>

                  {item.content.startsWith("http") ? null : (
                    <Text className="text-sm font-normal text-gray-500 mt-2">
                      {item.content.substring(0, 40)}...
                    </Text>
                  )}
                  {item.content.startsWith("http") && (
                    <Image
                      source={{ uri: item.content }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 8,
                        marginTop: 4,
                      }}
                      resizeMode="cover"
                    />
                  )}
                </View>
              </TouchableOpacity>
            )}
            ListEmptyComponent={() => (
              <View className="w-full flex-col items-center justify-center h-[70vh]">
                <Image source={icons.noMessageIcon} alt="empty message icon" />
                <Text className="text-base text-center font-normal text-black my-6">
                  No message history found
                </Text>
                <CustomButton
                  title="Click here to begin chat"
                  containerStyles="bg-primary !w-fit py-3 !px-8 rounded-lg"
                  titleStyle="text-base font-medium text-black"
                  handlePress={() => setMessages(messagesData)}
                />
              </View>
            )}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MessagesScreen;
