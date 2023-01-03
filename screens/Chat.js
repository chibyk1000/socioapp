import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Chat = () => {
  return (
    <SafeAreaView className="flex-1 justify-end pb-1 px-2 bg-[#111]">
      <View className=" ">
        <View className="bg-[#FFA500] w-24  h-10 rounded-lg justify-center px-2" >
          <Text className="text-white  font-bold">Mary John</Text>
          <Text className="text-white ">Hello</Text>
        </View>
        <View className="flex-row justify-end">
          <Text className="bg-gray-400 rounded-xl px-2 text-white">hey</Text>
        </View>
      </View>
      <View className="flex-row  items-center gap-2">
        <TextInput
          placeholder="Enter a Message"
          className="bg-gray-700 placeholder:text-white rounded-xl w-4/5 py-2 pl-3 "
          placeholderTextColor={'white'}
        />
        <MaterialCommunityIcons name="attachment" size={28} color="orange" />
        <MaterialCommunityIcons name="send" size={28} color="orange" />
      </View>
    </SafeAreaView>
  );
}

export default Chat