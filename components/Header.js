import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { Entypo } from "@expo/vector-icons";
const Header = () => {
  return (
    <View className={`flex-row justify-between w-screen pr-5`}>
      <Text className="font-bold text-[#ff6347] text-3xl">TGW</Text>
      <View className="flex-row items-center">
        <View className=" rounded-full border-[gold] border-2 w-fit h-fit">
          <Image
            source={require("../assets/pics2.png")}
            className="w-7 h-7 rounded-full border-[gold] border-2"
          />
        </View>
          <Entypo name="dots-three-vertical" size={25} color="tomato" />
      </View>
    </View>
  );
}

export default Header