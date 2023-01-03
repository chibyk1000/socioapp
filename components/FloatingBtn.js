import { View, Text } from 'react-native'
import React from 'react'
import { FloatingAction } from "react-native-floating-action";

const FloatingBtn = () => {

      const actions = [
        {
          text: "Gallery",
          icon: require("../assets/gallery.png"),
          name: "bt_gallery",
          position: 2,
        },
        {
          text: "Music",
          icon: require("../assets/musical-note.png"),
          name: "bt_music",
          position: 1,
        },
        {
          text: "Video",
          icon: require("../assets/vid.png"),
          name: "bt_video",
          position: 3,
        },
      ];
  return (
    <View className="absolute bottom-[20] right-2 z-10 rounded-full items-center justify-center">
      <FloatingAction
        actions={actions}
              color="orange"
              overlayColor='orange'
        onPressItem={(name) => {
          console.log(`selected button: ${name}`);
        }}
      />
    </View>
  );
}

export default FloatingBtn