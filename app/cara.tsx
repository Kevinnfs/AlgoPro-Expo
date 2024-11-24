import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown } from "react-native-reanimated";

const Cara = () => {
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
          Panduan Penggunaan Aplikasi
        </Text>
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1 bg-white">
        {/* Capaian Pembelajaran Section */}

        <Animated.View
          className="p-6 m-4 bg-[#F9F9F9] rounded-2xl shadow-lg"
          entering={FadeInDown.duration(500).delay(300).springify()}
        >
          <View className="flex-row items-center mb-4">
            <Ionicons name="logo-android" size={28} color="#EF8E4A" />
            <Text
              className="text-xl text-[#333] ml-2"
              style={{ fontFamily: "LoraBold" }}
            >
              Panduan Penggunaan Aplikasi AlgoPro
            </Text>
          </View>
          <Text
            className="text-justify text-base leading-7 text-[#555]"
            style={{ fontFamily: "LoraRegular" }}
          >
            Selamat datang di AlgoPro, sebuah solusi yang dirancang untuk
            mempermudah pembelajaran materi algoritma dan pemrograman pada mata
            pelajaran informatika. Panduan ini akan membantu Anda memahami cara
            menggunakan aplikasi ini dengan efisien, sehingga Anda dapat
            memaksimalkan pengalaman belajar Anda.
          </Text>
          {/* List Tujuan Pembelajaran */}
          <Text
            className="text-xl text-[#333] mt-3"
            style={{ fontFamily: "LoraBold" }}
          >
            Memahami Tampilan Beranda
          </Text>
          <View className="space-y-4 px-4 mt-3">
            {[
              "Tanda Seru: Pengguna dapat melihat tentang informasi aplikasi dan pembuat aplikasi",
              "Cari Materi: Ketika pengguna mengklik kolom cari materi, maka pengguna akan diarahkan ke halaman menu materi",
              "Kategori:\n• Contoh Program: Berisi contoh program yang dapat dipelajari.\n• Capaian dan Tujuan Pembelajaran: Menjelaskan capaian dan tujuan yang diharapkan dari materi pembelajaran yaitu mengenai algoritma dan pemrograman pada mata pelajaran informatika kelas X.\n• Panduan Penggunaan: Panduan tentang bagaimana menggunakan aplikasi ini. ",
              "Rekomendasi: Bagian ini menunjukkan materi yang direkomendasikan",
              "Akses Cepat\nNavigasi di bagian bawah: Terdapat ikon navigasi seperti\n• Beranda: Untuk kembali ke tampilan utama.\n• Materi: Akses ke list materi-materi yang tersedia.\n• Quiz: Akses ke latihan-latihan soal yang bisa dikerjakan oleh siswa\n• Tes Code: fitur untuk menguji kode yang dipelajari.",
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

          <Text
            className="text-xl text-[#333] mt-3"
            style={{ fontFamily: "LoraBold" }}
          >
            Menggunakan Fitur Utama
          </Text>
          <View className="space-y-4 px-4 mt-3">
            {[
              "Memilih Menu Materi Pembelajaran:\n• Ketuk fitur pencarian untuk mencari materi.\n• Bacalah materi dengan memilih salah satu materi yang ingin dipelajari.\n\nInteraksi dengan Materi:\n• Ketuk salah satu materi untuk melihat detail materi, dimana detail materi yang dipilih memiliki navigasi untuk membaca materi serta navigasi untuk melihat video terkait materi.\n• Beberapa materi dilengkapi dengan contoh kode yang dapat dicoba langsung pada aplikasi.",
              "Memilih Menu Latihan:\n• Bacalah petunjuk pengerjaan sebelum memulai kuis.\n• Ketuk mulai kuis jika sudah yakin untuk mengerjakan\n\nInteraksi latihan soal:\n• Setiap soal diberi waktu 15 detik, jika sudah habis waktu otomatis ke soal selanjutnya\n• Pengguna dapat mengklik tombol selanjutnya jika sudah memilih jawaban.\n•Pengguna juga dapat memulai kuis ulang dengan mengetuk mulai setelah mendapatkan skor.",
              "Memilih Tes Code:\n• Ketuk coba untuk mencoba menguji code bahasa C++.\n• Untuk siswa dapat mengetahui tugas apa yang harus dikerjakan dengan mengklik dropdown sesuai dengan kelompoknya.\n• Compiler code ini bersidat online yaitu membutuhkan koneksi internet.",
            ].map((item, index) => (
              <View key={index} className="flex-row items-start mt-3">
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

export default Cara;
