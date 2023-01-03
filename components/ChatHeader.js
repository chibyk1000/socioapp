import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { AntDesign } from "@expo/vector-icons";
const ChatHeader = ({ navigation, route }) => {
    return (

      <View className="flex-row w-[90%] justify-between bg-[#111]">
        <View className="flex-row gap-3 items-center">
          <Image
            source={route.params.data.image}
            className="w-10 h-10 rounded-full"
          />
          <Text className="text-xl text-white">{route.params.data.group_title}</Text>
        </View>
<Button style={{backgroundColor:"orange"}} textColor='white'>Invite</Button>

      </View>
    );
}

export default ChatHeader