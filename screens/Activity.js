import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ActivityCards from '../components/ActivityCards'
import { FontAwesome5 } from "@expo/vector-icons";
const Activity = () => {
  return (
    <ScrollView className="">
      <View className="absolute bottom-[20] right-2 z-10 rounded-full bg-gray-300 w-20 h-20 items-center justify-center placeholder:">
        <FontAwesome5 name="plus" size={25} color="black" />
      </View>
      <ActivityCards />
      <ActivityCards />
      <ActivityCards />
      <ActivityCards />
    </ScrollView>
  );
}

export default Activity