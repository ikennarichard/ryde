import { View, Text, Image } from "react-native";
import Animated from "react-native-reanimated";
import { images, icons } from "@/constants";
import InputField from "@/components/InputField";
import { Link } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { useState } from "react";

const SignUp = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <Animated.ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="Sign Up"
            // onPress={onSignUpPress}
            className="mt-6"
          />
          {/* <OAuth /> */}
          <Link
            href="/(auth)/login"
            className="text-lg text-center text-general-200 mt-10"
          >
            Already have an account?{" "}
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
      </View>
    </Animated.ScrollView>
  );
};

export default SignUp;
