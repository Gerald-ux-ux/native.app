import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import icons from "../../../constants/icons";
import { ResizeMode, Video } from "expo-av";

type VideoCardProps = {
  video: any;
};

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}: VideoCardProps) => {
  const [play, setPlay] = useState<boolean>(false);
  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border-secondary justify-center p-0.5 ">
            <Image
              resizeMode="contain"
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
            />
          </View>

          <View className="justify-center  flex-1  gap-y-1 ml-3">
            <Text
              className="text-white font-semibold text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>

            <Text
              className="text-xs text-gray-100 font-regular"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>

        <View className="pt-2">
          <Image
            resizeMode="contain"
            source={icons.menu}
            className="w-5 h-5 rounded-lg"
          />
        </View>
      </View>

      {play ? (
        <Video
          source={{ uri: video }}
          className="w-full h-60 rounded-xl "
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
        >
          <Image
            source={{ uri: thumbnail }}
            resizeMode="cover"
            className="w-hull h-full rounded-xl  mt-3 "
          />

          <Image
            className="w-12 h-12 absolute"
            resizeMode="contain"
            source={icons.play}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
