import { View, Text, Image } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Colors } from "@/constants/Colors";
import Button from "@/components/Button";
import { router } from "expo-router";

const Welcome = () => {
  return (
    <View className="bg-white gap-4 p-4 flex-1 w-full justify-center items-center">
      {/* Logo */}
      <Animated.View
        className="w-full justify-center items-center"
        entering={FadeInDown.duration(300).springify()}
      >
        <Image
          source={require("../assets/images/lele.png")}
          style={{
            width: 250,
            height: 250,
            aspectRatio: 1 / 1,
            resizeMode: "contain",
          }}
        />
      </Animated.View>

      {/* Teks */}
      <Animated.View
        className="w-full"
        entering={FadeInDown.duration(300).delay(200).springify()}
      >
        <Text
          className="text-3xl text-center leading-[3.5rem]"
          style={{ fontFamily: "LoraSemiBold" }}
        >
          Selamat Datang di Aplikasi {"\n"}
          <Text style={{ color: Colors.textOrange, fontFamily: "LoraBold" }}>
            AlgoPro!
          </Text>
        </Text>
      </Animated.View>

      <Animated.View
        className="w-full"
        entering={FadeInDown.duration(300).delay(400).springify()}
      >
        <Text
          className="text-xl  text-center leading-[2rem] text-gray-500"
          style={{ fontFamily: "LoraRegular" }}
        >
          Jelajahi berbagai pelajaran algoritma{"\n"}
          dan pemrograman, video, kuis, dan penerjemah kode
        </Text>
      </Animated.View>

      {/* Button */}
      <Animated.View
        className="w-full justify-center items-center mt-8"
        entering={FadeInDown.duration(300).delay(600).springify()}
      >
        <Button title="Mulai" action={() => router.push("/(tabs)")} />
      </Animated.View>
    </View>
  );
};

export default Welcome;
