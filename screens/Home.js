import React, { Component } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native";
import {Button} from 'react-native-paper'
import FeedCard  from '../components/FeedCard'
import { SafeAreaView } from "react-native-safe-area-context";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from "recyclerlistview";
import { FontAwesome5 } from "@expo/vector-icons";
import FloatingBtn from "../components/FloatingBtn";
const ViewTypes = {
  FULL: 0,
  HALF_LEFT: 1,
  HALF_RIGHT: 2,
};




export default class AllGroups extends React.Component {
  constructor(props) {
    super(props);

    let { width } = Dimensions.get("window");

    //Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
    let dataProvider = new DataProvider((r1, r2) => {
      return r1.id !== r2.id;
    });

    this._layoutProvider = new LayoutProvider(
      (index) => {
        return ViewTypes.FULL;
      },
      (type, dim) => {
        switch (type) {
          case ViewTypes.FULL:
            dim.width = width;
            dim.height = 500;
            break;
          default:
            dim.width = 0;
            dim.height = 0;
        }
      }
    );

    this._rowRenderer = this._rowRenderer.bind(this);

    this.state = {
      dataProvider: dataProvider.cloneWithRows(this._generateArray(300)),
    };
  }

  _generateArray(n) {
    const data = [
      {
        id: 1,
        group_title: "Meet up",
        image: require("../assets/meetup2.jpeg"),
        last_msg: "hello",
        last_sender: "John Doe",
        last_msg_time: "4 days ago",
      },
      {
        id: 2,
        group_title: "Meet up",
        image: require("../assets/meetup2.jpeg"),
        last_msg: "hello",
        last_sender: "John Doe",
        last_msg_time: "4 days ago",
      },
      {
        id: 3,
        group_title: "Meet up",
        image: require("../assets/meetup2.jpeg"),
        last_msg: "hello",
        last_sender: "John Doe",
        last_msg_time: "4 days ago",
      },
      {
        id: 4,
        group_title: "Meet up",
        image: require("../assets/meetup2.jpeg"),
        last_msg: "hello",
        last_sender: "John Doe",
        last_msg_time: "4 days ago",
      },
    ];

    return data;
  }

  //Given type and data return the view component
  _rowRenderer(type, data) {
    switch (type) {
      case ViewTypes.FULL:
        return (
         <FeedCard />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <SafeAreaView className="flex-1">
      <FloatingBtn/>

        <RecyclerListView
          layoutProvider={this._layoutProvider}
          dataProvider={this.state.dataProvider}
          rowRenderer={this._rowRenderer}
        />
      </SafeAreaView>
    );
  }
}
