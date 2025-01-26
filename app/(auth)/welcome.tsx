import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.navigate("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        {!isLastSlide && <Text className=" text-black text-md font-bold">Skip</Text>}
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={true}
        dot={<View className="w-8 h-1 mx-1 bg-gray-300 rounded-lg" />}
        activeDot={<View className="w-8 h-1 mx-1 bg-blue-700 rounded-lg" />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((w) => (
          <View key={w.id} className="flex items-center justify-center p-5">
            <Image
              source={w.image}
              className="w-full h-72"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {w.title}
              </Text>
            </View>
            <Text className="text-md font-JakartaSemiBold text-center mx-10 mt-3 text-gray-400">
              {w.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
       title={isLastSlide ? "Get Started" : "Next"}
       onPress={() =>
         isLastSlide
           ? router.replace("/(auth)/sign-up")
           : swiperRef.current?.scrollBy(1)
       }
       className="w-11/12 mt-10 mb-5"
      />
    </SafeAreaView>
  );
};

export default Welcome;
