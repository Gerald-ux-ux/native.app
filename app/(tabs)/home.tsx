import React, { useEffect, useState } from "react";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../../constants/images";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import EmptyState from "../components/tabs/empty-state";
import SearchInput from "../components/tabs/search-input";
import Trending from "../components/tabs/trending";
import useAppWrite from "../hooks/tabs/useAppWrite";
import VideoCard from "../components/tabs/video-card";

const Home = () => {
  const { data, refetch } = useAppWrite({ fn: getAllPosts });
  const { data: latestPosts } = useAppWrite({ fn: getLatestPosts });

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={data}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-4 px-4 space-y-4">
            <View className="justify-between items-center flex-row mb-3">
              <View>
                <Text className="font-medium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl text-white font-semibold ">
                  Gerald Kamau
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  className="w-9 h-20"
                  resizeMode="contain"
                  source={images.logoSmall}
                />
              </View>
            </View>
            <SearchInput />
            <View className="w-full flex-1  pb-2">
              <Text className=" text-lg mb-3 text-gray-100 flex-1">
                Latest videos
              </Text>

              <Trending posts={latestPosts ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos Found"
            description="Be the first one to upload a video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
