import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown } from "react-native-reanimated";

const Capaian = () => {
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
          CP dan TP
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
            <Ionicons name="school-outline" size={28} color="#EF8E4A" />
            <Text
              className="text-xl text-[#333] ml-2"
              style={{ fontFamily: "LoraBold" }}
            >
              Capaian Pembelajaran
            </Text>
          </View>
          <Text
            className="text-justify text-base leading-7 text-[#555]"
            style={{ fontFamily: "LoraRegular" }}
          >
            Capaian Pembelajaran elemen Algoritma dan Pemrograman yaitu Pada
            akhir fase E, peserta didik mampu menerapkan praktik baik konsep
            pemrograman prosedural dalam salah satu bahasa pemrograman
            prosedural dan mampu mengembangkan program yang terstruktur dalam
            notasi algoritma atau notasi lain, berdasarkan strategi algoritmik
            yang tepat.
          </Text>
        </Animated.View>

        {/* Tujuan Pembelajaran Section */}
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
              Tujuan Pembelajaran
            </Text>
          </View>
          {/* List Tujuan Pembelajaran */}
          <View className="space-y-4 px-4">
            {[
              "Peserta didik mampu membaca dan menulis algoritma dengan benar.",
              "Peserta didik mampu menginstal tools dan lingkungan pemrograman yang akan dipakai berlatih.",
              "Peserta didik mampu mengetik ulang kode program dan menjalankannya dalam lingkungan pemrograman yang dipergunakan.",
              "Peserta didik mampu memahami konsep input-output dan mampu menuliskan program sederhana yang membaca dan menulis.",
              "Peserta didik mampu memahami konsep variabel dan ekspresi dan mengaplikasikannya dalam bentuk program.",
              "Peserta didik mampu memahami konsep struktur kontrol keputusan dan mengaplikasikannya dalam bentuk program.",
              "Peserta didik mampu memahami konsep struktur kontrol perulangan dan mengaplikasikannya dalam bentuk program.",
              "Peserta didik mampu memahami implementasi fungsi dalam program.",
              "Peserta didik mampu mengaplikasikan konsep-konsep pemrograman prosedural dalam menyelesaikan persoalan yang lebih kompleks.",
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

export default Capaian;
