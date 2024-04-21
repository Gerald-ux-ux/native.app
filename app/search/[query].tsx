import React, { useEffect, useState } from "react";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../../constants/images";
import { getAllPosts, getLatestPosts, searchPosts } from "../../lib/appwrite";
import EmptyState from "../components/tabs/empty-state";
import SearchInput from "../components/tabs/search-input";
import Trending from "../components/tabs/trending";
import useAppWrite from "../hooks/tabs/useAppWrite";
import VideoCard from "../components/tabs/video-card";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const { query } = useLocalSearchParams();
  const { data, refetch } = useAppWrite({ fn: () => searchPosts(query) });

  useEffect(() => {
    refetch();
  }, [query]);
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={data}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-4 px-4">
            <Text className="font-medium text-sm text-gray-100">
              Search results
            </Text>
            <Text className="text-2xl text-white font-semibold ">{query}</Text>

            <View className="mt-6 mb-8">
              <SearchInput initialQuery={query as string} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos Found"
            description={`No videos found for ${query}`}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
