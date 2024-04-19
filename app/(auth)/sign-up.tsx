import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../../constants/images";
import { createUser } from "../../lib/appwrite";
import Footer from "../components/auth/footer";
import SignUpFormComponent from "../components/auth/sign-up-form";
import CustomButton from "../components/custom-btn";
import useSignUp from "../hooks/auth/useSignUp";
import FormErrorMessage from "../../components/errors/form-error-message";

const SignUp = () => {
  const { form, setForm, submit, isSubmitting, error } = useSignUp();
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
          {error.success === false ? (
            <FormErrorMessage message={error.message} />
          ) : null}
          <CustomButton
            containerStyles="mt-7"
            text="Sign Up"
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
