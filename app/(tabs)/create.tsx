import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import FormField from "../components/auth/form-field";

const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    video: null,
    thumbnail: null,
    prompt: "",
  });
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
