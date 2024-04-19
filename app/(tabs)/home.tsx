import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import images from "../../constants/images";
import SearchInput from "../components/tabs/search-input";
import Trending from "../components/tabs/trending";
import EmptyState from "../components/tabs/empty-state";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
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
            {/* <View className="w-full flex-1 pt-5 pb-8">
              <Text className=" text-lg mb-3 text-gray-100 flex-1 pt-5 pb-8">
                Latest videos
              </Text>

              <Trending posts={[{ id: 1 }, { id: 2 }] ?? []} />
            </View> */}
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos Found"
            description="Be the first one to upload a video"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
