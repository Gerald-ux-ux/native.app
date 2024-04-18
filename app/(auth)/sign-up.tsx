import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import CustomButton from "../components/custom-btn";
import Footer from "../components/auth/footer";
import SignUpFormComponent from "../components/auth/sign-up-form";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    createUser();
  };
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
          <SignUpFormComponent form={form} setForm={setForm} />
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
