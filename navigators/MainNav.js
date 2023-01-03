import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNav from './TabNav';
import Header from '../components/Header';
import Chat from '../screens/Chat';
import ChatHeader from '../components/ChatHeader';
const Stack =  createNativeStackNavigator()
const MainNav = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      defaultScreenOptions={{
        navigationBarColor: "#111",
        headerStyle: { backgroundColor: "#111" },
      }}
    >
      <Stack.Screen
        name="Main"
        component={TabNav}
        options={{
          headerTitle: () => <Header />,
          headerStyle: { backgroundColor: "#111" },
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({ navigation, route }) => ({
          headerTitle: () => (
            <ChatHeader navigation={navigation} route={route} />
          ),
          headerStyle: { backgroundColor: "#111" },
          // headerBackVisible:false

          headerTintColor: "#FFA500",
        })}
      />
    </Stack.Navigator>
  );
}

export default MainNav