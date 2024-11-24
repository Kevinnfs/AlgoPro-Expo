import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown } from "react-native-reanimated";

const Info = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="pt-14 pb-6 bg-[#EF8E4A] w-full flex-row items-center px-6">
        <Pressable
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full bg-[#fbb17d] items-center justify-center"
        >
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </Pressable>
        <Text
          className="flex-1 text-center text-lg text-white"
          style={{ fontFamily: "LoraBold" }}
        >
          Tentang Aplikasi
        </Text>
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1 bg-white">
        {/* Capaian Pembelajaran Section */}
        <Animated.View
          className="p-6 m-4 bg-[#F9F9F9] rounded-2xl shadow-lg"
          entering={FadeInDown.duration(500).delay(200).springify()}
        >
          <View className="flex-row items-center mb-4">
            <Ionicons name="information-sharp" size={28} color="#EF8E4A" />
            <Text
              className="text-xl text-[#333] ml-2"
              style={{ fontFamily: "LoraBold" }}
            >
              Deskripsi Aplikasi
            </Text>
          </View>
          <Text
            className="text-justify text-base leading-7 text-[#555]"
            style={{ fontFamily: "LoraRegular" }}
          >
            AlgoPro adalah sebuah aplikasi pembelajaran interaktif yang
            dirancang khusus untuk membantu siswa SMK kelas X memahami konsep
            dasar algoritma dan pemrograman secara mendalam dan menyenangkan.
            Aplikasi ini menggunakan pendekatan modern yang menggabungkan teori,
            latihan soal, simulasi untuk mendukung pemahaman materi secara
            menyeluruh.
          </Text>
        </Animated.View>

        {/* Tujuan Pembelajaran Section */}
        <Animated.View
          className="p-6 m-4 bg-[#F9F9F9] rounded-2xl shadow-lg"
          entering={FadeInDown.duration(500).delay(300).springify()}
        >
          <View className="flex-row items-center mb-4">
            <Ionicons name="arrow-redo-outline" size={28} color="#EF8E4A" />
            <Text
              className="text-xl text-[#333] ml-2"
              style={{ fontFamily: "LoraBold" }}
            >
              Tujuan Aplikasi
            </Text>
          </View>
          <Text
            className="text-justify text-base leading-7 text-[#555] mb-3"
            style={{ fontFamily: "LoraRegular" }}
          >
            Aplikasi ini bertujuan untuk mendukung proses pembelajaran siswa
            kelas X SMK pada mata pelajaran Informatika, khususnya pada materi
            Algoritma dan Pemrograman. Tujuan utama dari pengembangan aplikasi
            ini meliputi:
          </Text>
          {/* List Tujuan Pembelajaran */}
          <View className="space-y-4 px-4">
            {[
              "Membantu siswa memahami konsep dasar algoritma dan pemrograman melalui penjelasan yang interaktif, terstruktur, dan mudah diakses.",
              "Menyediakan sarana pembelajaran digital yang dapat digunakan secara mandiri oleh siswa kapan saja dan di mana saja, sehingga mendukung keberlanjutan belajar di luar kelas.",
              "Melatih siswa dalam menyelesaikan permasalahan pemrograman melalui berbagai latihan soal, simulasi, dan studi kasus.",
              "Menyediakan alat bantu bagi guru untuk menyampaikan materi secara efektif dan berbasis teknologi",
            ].map((item, index) => (
              <View key={index} className="flex-row items-start">
                <Text
                  className="text-[#EF8E4A] text-base mr-2"
                  style={{ fontFamily: "LoraBold" }}
                >
                  {index + 1}.
                </Text>
                <Text
                  className="text-justify text-base leading-7 text-[#555]"
                  style={{ fontFamily: "LoraRegular" }}
                >
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </Animated.View>
        <Animated.View
          className="p-6 m-4 bg-[#F9F9F9] rounded-2xl shadow-lg"
          entering={FadeInDown.duration(500).delay(300).springify()}
        >
          <View className="flex-row items-center mb-4">
            <Ionicons name="list-outline" size={28} color="#EF8E4A" />
            <Text
              className="text-xl text-[#333] ml-2"
              style={{ fontFamily: "LoraBold" }}
            >
              Fitur Utama
            </Text>
          </View>
          <Text
            className="text-justify text-base leading-7 text-[#555] mb-3"
            style={{ fontFamily: "LoraRegular" }}
          >
            Aplikasi ini dirancang untuk mendukung pembelajaran materi Algoritma
            dan Pemrograman secara efektif. Berikut adalah fitur utama yang
            tersedia dalam aplikasi:
          </Text>
          {/* List Tujuan Pembelajaran */}
          <View className="space-y-4 px-4">
            {[
              "Materi Pembelajaran Interaktif\nMenyediakan materi Algoritma dan Pemrograman yang disajikan dalam bentuk teks, video, dan contoh untuk mempermudah pemahaman konsep dasar.",
              "Latihan Soal\nFitur latihan soal interaktif yang mencakup pilihan ganda. Hasil evaluasi langsung ditampilkan untuk memberikan umpan balik kepada siswa.",
              "Compiler dan Studi Kasus\nMenyediakan compiler dasar untuk bahasa pemrograman C++ agar siswa dapat langsung mempraktikkan kode mereka di dalam aplikasi serta studi kasus atau soal yang harus dikerjakan dalam menggunakan compiler tersebut.",
              "Akses Offline dan Online\nAplikasi dapat digunakan dalam mode offline untuk materi, video dan latihan soal, serta online untuk fitur compiler atau tes code.",
            ].map((item, index) => (
              <View key={index} className="flex-row items-start">
                <Text
                  className="text-[#EF8E4A] text-base mr-2"
                  style={{ fontFamily: "LoraBold" }}
                >
                  {index + 1}.
                </Text>
                <Text
                  className="text-justify text-base leading-7 text-[#555]"
                  style={{ fontFamily: "LoraRegular" }}
                >
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default Info;
