import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import icons from "../../constants/icons";
import { useGlobalContext } from "../../context/GlobalProvide";
import { getUserPosts, searchPosts } from "../../lib/appwrite";
import InfoBox from "../components/search/info-box";
import EmptyState from "../components/tabs/empty-state";
import SearchInput from "../components/tabs/search-input";
import VideoCard from "../components/tabs/video-card";
import useAppWrite from "../hooks/tabs/useAppWrite";

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data, refetch } = useAppWrite({ fn: () => getUserPosts(user?.$id) });

  useEffect(() => {
    refetch();
  }, []);

  const logout = () => {};
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={data}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mb-12 mt-6 px-4">
            <TouchableOpacity
              onPress={logout}
              className="items-end mb-10 w-full"
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className=" w-6 h-6 "
              />
            </TouchableOpacity>

            <View className="h-16 w-16 border rounded-lg border-secondary justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                resizeMode="cover"
                className="w-[90%] h-[90%] rounded-lg"
              />
            </View>

            <InfoBox
              title={user?.name}
              titleStyles="text-lg"
              containerStyles="mt-5"
            />
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos Found"
            // description={`No videos found for ${query}`}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
