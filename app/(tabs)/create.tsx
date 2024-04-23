import { ResizeMode, Video } from "expo-av";
import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

import icons from "../../constants/icons";
import FormField from "../components/auth/form-field";
import CustomButton from "../components/custom-btn";

const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    video: null,
    thumbnail: null,
    prompt: "",
  });

  function submit() {}
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-white text-2xl font-semibold">Upload video</Text>

        <FormField
          value={form.title}
          placeholder="Give your video a catch title"
          handleChangeText={(e) => {
            setForm({ ...form, title: e });
          }}
          title="Video Title"
          otherStyles="mt-10"
        />
        <View className="mt-7 space-y-2">
          <Text className="text-gray-100 text-base  font-semibold">
            Upload video
          </Text>
          <TouchableOpacity>
            {form.video ? (
              <Video
                source={{ uri: form.video }}
                className="w-full h-64 rounded-2xl"
                useNativeControls
                resizeMode={ResizeMode.COVER}
                isLooping
              />
            ) : (
              <View className="w-full h-40 px-4 bg-black rounded-2xl justify-center items-center">
                <View className="border border-dashed border-secondary justify-center items-center w-14 h-14">
                  <Image
                    source={icons.upload}
                    resizeMode="contain"
                    className="w-1/2 h-1/2"
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View className="mt-7 space-y-2">
          <Text className="text-gray-100 text-base  font-semibold">
            Thumbnail image
          </Text>
          <TouchableOpacity>
            {form.thumbnail ? (
              <Image
                source={{ uri: form.thumbnail }}
                className="w-full h-64 rounded-2xl"
                resizeMode="cover"
              />
            ) : (
              <View className="w-full h-16 border-black flex-row space-x-2 px-4 bg-black rounded-2xl justify-center items-center">
                <Image
                  source={icons.upload}
                  resizeMode="contain"
                  className="w-5 h-5"
                />
                <Text className="text-sm text-gray-100 font-medium">
                  Choose a file
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <FormField
          value={form.prompt}
          placeholder="Prompt you used to create this video..."
          handleChangeText={(e) => {
            setForm({ ...form, prompt: e });
          }}
          title="Ai Prompt"
          otherStyles="mt-7"
        />
        <CustomButton
          containerStyles="mt-7 "
          isLoading={uploading}
          text="Submit & Publish"
          handlePress={submit}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
