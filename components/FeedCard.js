import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FeedCard = () => {
  return (
    <View className="w-full px-2 shadow-md">
    
      <View>
        <View className="flex-row justify-between  items-center">
          <View className="flex-row gap-1 items-end">
            <Image
              source={require("../assets/pics2.png")}
              className="w-10 h-10 rounded-full"
            />
            <View>
              <Text className="font-bold text-[tomato]">James Bond</Text>
              <Text className="text-green-600 text-sm">7 minutes ago</Text>
            </View>
          </View>

          <Entypo name="dots-three-horizontal" size={24} color="tomato" />
        </View>
        <View className="py-2">
          <Text>You are beautiful</Text>
          <Image source={require('../assets/testimage.jpg')} className="w-full"/>
        </View>
        <Divider />
        <View className="flex-row justify-between mt-2">
          <AntDesign name="like1" size={24} color="black" />
          <View className="flex-row items-center gap-2">
          <MaterialCommunityIcons name="comment-text" size={24} color="black" />
<Text>No Comment</Text>
          </View>
          <AntDesign name="like1" size={24} color="tomato" />
        </View>
      </View>

      <TextInput placeholder="Say something..." className="border rounded-3xl h-10 mt-2 pl-2"/>
    </View>
  );
};

export default FeedCard;
