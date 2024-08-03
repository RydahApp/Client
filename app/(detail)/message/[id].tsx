import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { messagesData } from "@/constants/data";
import { messageType } from "@/types";
import { icons } from "@/constants";
import * as ImagePicker from "expo-image-picker";
import { Fontisto, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const MessagedetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const chatData = messagesData.filter((item) => item.id === id);
  const router = useRouter();
  if (!chatData) {
    return <Text>Message not found</Text>;
  }

  const [messages, setMessages] = useState<messageType[]>(chatData);
  const [newMessage, setNewMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState<{ uri: string } | null>(
    null
  );
  const flatListRef = useRef<FlatList>(null);

  const handleSend = () => {
    if (newMessage.trim() || selectedImage) {
      const content = selectedImage
        ? `${newMessage}\n${selectedImage.uri}`
        : newMessage;

      setMessages((prevMessages: any) => [
        ...prevMessages,
        {
          id: `${prevMessages.length + 1}`,
          sender: "Customer",
          receiver: "Seller",
          content,
        },
      ]);

      setNewMessage("");
      setSelectedImage(null);
    }
  };

  const renderMessage = ({ item }: { item: messageType }) => {
    const messageParts = item.content.split("\n");

    return (
      <View
        className={`mb-2 ${
          item.sender === "Customer"
            ? "self-end bg-primary"
            : "self-start bg-gray-200"
        } p-2 rounded`}
        style={{ maxWidth: "80%" }}
      >
        {messageParts.map((part, index) => {
          if (part.startsWith("http")) {
            console.log(part);
            return (
              <Image
                key={index}
                source={{ uri: part }}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 8,
                  marginTop: 4,
                }}
              />
            );
          } else if (part.startsWith("file://")) {
            return (
              <Image
                key={index}
                source={{ uri: part }}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 8,
                  marginTop: 4,
                }}
              />
            );
          } else {
            return <Text key={index}>{part}</Text>;
          }
        })}
      </View>
    );
  };

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setSelectedImage({ uri: result.assets[0].uri });
    }
  };

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <SafeAreaView className="w-full flex-1 bg-white px-5 py-6">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center justify-start space-x-2"
        >
          <Ionicons name="chevron-back" size={24} color="#000000" />
          <Text className="text-xl font-medium text-black">
            {chatData[0].sender}
          </Text>
        </TouchableOpacity>
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={{ paddingVertical: 20 }}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: true })
          }
          onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
        />
        <View className="relative">
          {selectedImage && (
            <View className="flex-row items-start p-4 border-t border-black/10 relative">
              <Image
                source={{ uri: selectedImage.uri }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  marginRight: 8,
                }}
              />
              <TouchableOpacity
                onPress={() => setSelectedImage(null)}
                className=""
              >
                <Fontisto name="close" size={14} color="black" />
              </TouchableOpacity>
            </View>
          )}

          <View className="flex-row items-center h-14 border rounded border-[#98A2B3] overflow-hidden">
            <TouchableOpacity
              onPress={handleImagePick}
              className="px-2 rotate-[120deg]"
            >
              <MaterialCommunityIcons
                name="attachment"
                size={20}
                color="black"
              />
            </TouchableOpacity>
            <TextInput
              className="flex-1"
              placeholder="Type your message..."
              value={newMessage}
              onChangeText={setNewMessage}
              multiline={true}
              numberOfLines={2}
            />
            <TouchableOpacity
              onPress={handleSend}
              className="w-fit bg-primary flex-row items-center justify-center px-3 h-full"
            >
              <Image
                source={icons.sendIcon}
                alt="send message icon"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MessagedetailScreen;
