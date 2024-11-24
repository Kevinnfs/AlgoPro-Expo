import {
  Text,
  View,
  Pressable,
  ScrollView,
  ActivityIndicator,
  FlatList,
  ImageSourcePropType,
} from "react-native";
import React, { useState } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { HelloWave } from "@/components/HelloWave";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useQuery } from "@tanstack/react-query";
import CourseItem from "@/components/CourseItem";
import { images } from "@/assets/images";

interface Course {
  id: number;
  title: string;
  image_480x270: ImageSourcePropType;
  is_paid: boolean;
  price: string;
}

interface SearchResponse {
  results: Course[];
}

interface Category {
  id: string;
  name: string;
  icon: string;
  subName: string;
}

const categories: Category[] = [
  {
    id: "cp",
    name: "Contoh",
    subName: "Program",
    icon: "code-working-outline",
  },
  {
    id: "ctp",
    name: "Capaian dan Tujuan",
    subName: "Pembelajaran",
    icon: "document-text-outline",
  },
  {
    id: "method",
    name: "Panduan",
    subName: "Penggunaan",
    icon: "help-circle-outline",
  },
];

const fetchCourses = async (
  selectedCategory: string
): Promise<SearchResponse> => {
  return {
    results: [
      {
        id: 1,
        title: "Algoritma",
        image_480x270: images[1],
        is_paid: false,
        price: "3 Materi Terkait",
      },
      {
        id: 4,
        title: "Komponen Program Bahasa C++",
        image_480x270: images[4],
        is_paid: true,
        price: "6 Materi Terkait",
      },
      {
        id: 5,
        title: "Ekspresi",
        image_480x270: images[5],
        is_paid: true,
        price: "5 Materi Terkait",
      },
      {
        id: 6,
        title: "Struktur Kontrol Perulangan",
        image_480x270: images[6],
        is_paid: true,
        price: "4 Materi Terkait",
      },
    ],
  };
};

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("video");

  const { data, error, isLoading } = useQuery({
    queryKey: ["searchCourses", selectedCategory],
    queryFn: () => fetchCourses(selectedCategory),
    enabled: true,
  });

  const renderCategory = ({ item }: { item: Category }) => (
    <Pressable
      onPress={() => {
        if (item.id === "video") {
          router.push("/video");
        } else if (item.id === "cp") {
          router.push("/program");
        } else if (item.id === "ctp") {
          router.push("/capaian");
        } else if (item.id === "method") {
          router.push("/cara");
        }
      }}
      className="mr-4 bg-white rounded-lg shadow-md items-center flex-col"
      style={{
        width: 100,
        height: 130,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        elevation: 3,
      }}
    >
      <View className="p-3 rounded-full bg-[#8CD9D3] shadow-lg mb-2">
        <Ionicons name={item.icon as any} size={26} color="#333" />
      </View>
      <Text
        className="text-sm font-bold text-center mt-2"
        style={{ fontFamily: "LoraMedium" }}
      >
        {item.name}
      </Text>
      <Text
        className="text-xs text-gray-500 text-center mt-1"
        style={{ fontFamily: "LoraRegular" }}
      >
        {item.subName}
      </Text>
    </Pressable>
  );

  return (
    <View className="flex-1 bg-[#F3F4F6]">
      {/* Header Section */}
      <View className="pt-16 pb-10 px-6 bg-[#EF8E4A]">
        <Animated.View className="flex-row justify-between items-center">
          <View>
            <View className="flex-row items-end gap-2">
              <Text
                className="text-white text-lg tracking-widest"
                style={{ fontFamily: "LoraMedium" }}
              >
                Hello
              </Text>
              <HelloWave />
            </View>
            <Text
              className="text-white text-2xl mt-2 "
              style={{ fontFamily: "LoraBold" }}
            >
              Mari Kita Mulai Belajar
            </Text>
          </View>
          <Pressable onPress={() => router.push("/info")}>
            <Ionicons
              name="information-circle-outline"
              size={28}
              color="white"
            />
          </Pressable>
        </Animated.View>

        <Pressable onPress={() => router.push("/explore")}>
          <View className="flex-row items-center bg-white rounded-xl shadow-md p-4 mt-10">
            <Ionicons name="search-outline" size={20} color="#EF8E4A" />
            <Text
              className="text-[#EF8E4A] ml-2 font-semibold"
              style={{ fontFamily: "LoraMedium" }}
            >
              Cari Materi
            </Text>
          </View>
        </Pressable>
      </View>

      <ScrollView className="flex-1 bg-[#F3F4F6]">
        {/* Kategori Section */}
        <Animated.View
          className="gap-6 mt-8"
          entering={FadeInDown.duration(500).delay(200).springify()}
        >
          <View className="flex-row justify-center px-6">
            <Text className="text-lg " style={{ fontFamily: "LoraBold" }}>
              Kategori
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-4 px-6"
          >
            {categories.map((category) => (
              <View key={category.id}>
                {renderCategory({ item: category })}
              </View>
            ))}
          </ScrollView>
        </Animated.View>

        {/* Rekomendasi Section */}
        <View className="flex-row justify-between px-6 pt-8 items-center">
          <Text className="text-lg " style={{ fontFamily: "LoraBold" }}>
            Rekomendasi
          </Text>
          <Text
            style={{ color: Colors.textOrange, fontFamily: "LoraSemiBold" }}
          >
            Lihat semua
          </Text>
        </View>

        {isLoading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="#EF8E4A" />
          </View>
        ) : error ? (
          <Text>Error: {(error as Error).message}</Text>
        ) : data?.results ? (
          <FlatList
            horizontal
            data={data.results}
            renderItem={({ item }) => (
              <CourseItem
                course={item}
                customStyle="w-[22rem] pl-6"
                index={0}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <View className="flex-1 justify-center items-center">
            <Text>No Results</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
