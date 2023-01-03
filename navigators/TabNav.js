import React, {useState} from 'react'

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Text
} from 'react-native';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Activity from '../screens/Activity';
import Groups from '../screens/Groups';
import Friends from '../screens/Friends';


const Tab = createBottomTabNavigator();
const TabNav = () => {

  const [isFocused, setIsFocused] = useState(false)
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#FFA500"
      inactiveColor="orange"
      barStyle={{ backgroundColor: "#333" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={26}
            />
          ),
        }}
        // options={{
        //   tabBarLabel: <Text style={{ color: `${isFocused? '#ffa500': "#ccc"}` }}>Home</Text>,
        //   tabBarColor: "orange",
        //   tabBarIcon: ({ color, focused }) => {

        //     return (

        //       <MaterialCommunityIcons
        //         name="home"
        //         color={focused ? color : "#ccc"}
        //         size={26}
        //         />
        //     )
        //   },
        // }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarLabel: "Activity",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="sort-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Groups"
        component={Groups}
        options={{
          tabBarLabel: "Groups",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarLabel: "Friends",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-multiple"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNav