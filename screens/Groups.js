import { View, Text } from 'react-native'
import React from 'react'
import GroupTopNav from '../navigators/GroupTopNav'
import { FontAwesome5 } from "@expo/vector-icons";
import { FloatingAction } from 'react-native-floating-action';
import FloatingBtn from '../components/FloatingBtn';
const Groups = () => {

  return (
    <>
<FloatingBtn/>
      <GroupTopNav />
    </>
  );
}

export default Groups