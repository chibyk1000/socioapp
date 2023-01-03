import { View, Text, Image } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
const ActivityCards = () => {
  return (
    <View className="p-2 my-5 ">
      <View className="flex-row justify-between items-center">
        <Text className="font-bold text-4xl">Meet-Ups</Text>
        <Text className="flex-row gap-2 text-xl">
          See ALL <Fontisto name="angle-right" size={15} color="black" />
        </Text>
      </View>

      <View className="flex-row gap-1 ">
        <View className="w-2/5  h-40 bg-[#111]">
          <Image
            source={require("../assets/meetup1.jpg")}
            className="w-full h-[70%]"
          />
          <View>
            <Text className="font-bold text-white">Hang Out With Us</Text>
            <Text className=" text-white">Tech Hangout</Text>
          </View>
        </View>
        <View className="w-2/5 h-40 bg-[#111]">
          <Image
            source={require("../assets/meetup2.jpeg")}
            className="w-full h-[70%]"
          />
          <View>
            <Text className="font-bold text-white">Hang Out With Us</Text>
            <Text className=" text-white">Tech Hangout</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActivityCards;
