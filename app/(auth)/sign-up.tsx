import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../components/auth/form-field";
import CustomButton from "../components/custom-btn";
import { Link } from "expo-router";
import Footer from "../components/auth/footer";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full  flex justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className=" w-[115px] h-[35px] "
          />
          <Text className="text-2xl mt-10 font-semibold text-white">
            Sign Up
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e: any) => {
              setForm({ ...form, username: e });
            }}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => {
              setForm({ ...form, email: e });
            }}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => {
              setForm({ ...form, password: e });
            }}
            otherStyles="mt-7"
          />
          <CustomButton
            containerStyles="mt-7"
            text="Sign In"
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <Footer
            link="/sign-in"
            text="Have an account already ?"
            action="Login"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
