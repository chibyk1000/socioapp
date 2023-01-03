
import React, { Component } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
} from "recyclerlistview";
import { FontAwesome5 } from "@expo/vector-icons";

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
            dim.height = 70;
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
      group_title:"Meet up",
      image: require('../assets/meetup2.jpeg'),
      last_msg: "hello",
      last_sender: "John Doe",
      last_msg_time: "4 days ago"
      
    },
      {
      
      id: 2,
      group_title:"Love party",
      image: require('../assets/pics2.png'),
      last_msg: "hello people",
      last_sender: "Kenneth Milga",
      last_msg_time: "4 days ago"
      
    },
      {
      
      id: 3,
      group_title:"Love party",
      image: require('../assets/prof1.jpg'),
      last_msg: "hello",
      last_sender: "Kenneth Milga",
      last_msg_time: "4 days ago"
      
    },
      {
      
      id: 4,
      group_title:"Love party",
      image: require('../assets/prof1.jpg'),
      last_msg: "hello",
      last_sender: "Kenneth Milga",
      last_msg_time: "4 days ago"
      
    },
      {
      
      id: 5,
      group_title:"Love party",
      image: require('../assets/prof1.jpg'),
      last_msg: "hello",
      last_sender: "Kenneth Milga",
      last_msg_time: "4 days ago"
      
    },
      {
      
      id: 6,
      group_title:"Love party",
      image: require('../assets/prof1.jpg'),
      last_msg: "hello",
      last_sender: "Kenneth Milga",
      last_msg_time: "4 days ago"
      
    },
      {
      
      id: 7,
      group_title:"Love party",
      image: require('../assets/prof1.jpg'),
      last_msg: "hello",
      last_sender: "Kenneth Milga",
      last_msg_time: "4 days ago"
      
    },
      {
      
      id: 8,
      group_title:"Love party",
      image: require('../assets/prof1.jpg'),
      last_msg: "hello",
      last_sender: "Kenneth Milga",
      last_msg_time: "4 days ago"
      
    },
      {
      
      id: 9,
      group_title:"Love party",
      image: require('../assets/prof1.jpg'),
      last_msg: "hello",
      last_sender: "Kenneth Milga",
      last_msg_time: "4 days ago"
      
    },
      {
      
      id: 10,
      group_title:"Love party",
      image: require('../assets/prof1.jpg'),
      last_msg: "hello",
      last_sender: "Kenneth Milga",
      last_msg_time: "4 days ago"
      
    },
      {
      
      id: 11,
      group_title:"Love party",
      image: require('../assets/prof1.jpg'),
      last_msg: "hello",
      last_sender: "Kenneth Milga",
      last_msg_time: "4 days ago"
      
    },
      {
      
      id: 12,
      group_title:"Love party",
      image: require('../assets/prof1.jpg'),
      last_msg: "hello",
      last_sender: "Kenneth Milga",
      last_msg_time: "4 days ago"
      
    },
    ]
    
    return data;
  }

  //Given type and data return the view component
  _rowRenderer(type, data) {

    switch (type) {
   
      case ViewTypes.FULL:
        return (
          <TouchableOpacity className="flex-row items-center gap-2" onPress={()=> this.props.navigation.navigate('Chat', {data})}>
            <Image source={data.image} className="w-14 h-14 rounded-full" />
            <View>
              <Text className="font-bold text-lg">{data.group_title}</Text>
              <Text className="">{data.last_sender}: {data.last_msg}</Text>
              <Text className="">3days ago</Text>
            </View>
          </TouchableOpacity>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <>
      
        <RecyclerListView
          layoutProvider={this._layoutProvider}
          dataProvider={this.state.dataProvider}
          rowRenderer={this._rowRenderer}
        />
      </>
    );
  }
}
