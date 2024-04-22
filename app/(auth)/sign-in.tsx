import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FormErrorMessage from "../../components/errors/form-error-message";
import images from "../../constants/images";
import Footer from "../components/auth/footer";
import FormField from "../components/auth/form-field";
import CustomButton from "../components/custom-btn";
import useSignIn from "../hooks/auth/useSignIn";

const SignIn = () => {
  const { form, setForm, error, submit, isSubmitting } = useSignIn();
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
            Sign in
          </Text>
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
            // keyboardType="password"
          />

          {error.success === false ? (
            <FormErrorMessage message={error.message} />
          ) : null}
          <CustomButton
            containerStyles="mt-7"
            text="Sign In"
            handlePress={submit}
            isLoading={isSubmitting}
          />

          <Footer
            link="/sign-up"
            text="Don't have an account"
            action="Sign Up"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
