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
            <Ionicons name="document-text-outline" size={28} color="#EF8E4A" />
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
          <View className="space-y-4 px-4 mt-3 gap-3">
            {[
              {
                label: "Tanda Info",
                icon: "information-circle-outline",
                description:
                  "Pengguna dapat melihat tentang informasi aplikasi seperti deskripsi aplikasi, tujuan aplikasi dibuat, dan fitur-fitur utama yang ada pada aplikasi.",
              },
              {
                label: "Cari Materi",
                icon: "search-outline",
                description:
                  "Ketika pengguna mengklik kolom cari materi, maka pengguna akan diarahkan ke halaman menu materi",
              },
              {
                label: "Contoh Program",
                icon: "code-working-outline",
                description:
                  "Berisi contoh program yang dapat dipelajari berupa bahasa pemrograman C++.",
              },
              {
                label: "Capaian dan Tujuan Pembelajaran",
                icon: "document-text-outline",
                description:
                  "Menjelaskan capaian dan tujuan yang diharapkan dari materi pembelajaran yaitu mengenai algoritma dan pemrograman pada mata pelajaran informatika kelas X.",
              },
              {
                label: "Panduan Penggunaan",
                icon: "help-circle-outline",
                description:
                  "Panduan tentang bagaimana menggunakan aplikasi ini.",
              },
              {
                label: "Materi",
                icon: "school-outline",
                description:
                  "Menampilkan list-list materi algoritma dan pemrograman",
              },
              {
                label: "Latihan",
                icon: "ribbon-outline",
                description:
                  "Akses terhadap latihan soal serta petunjuk pengerjaan.",
              },
              {
                label: "Tes code",
                icon: "code-slash-outline",
                description:
                  "Akses untuk mencoba menguji code bahasa C++ serta daftar tugas kelompok yang harus dikerjakan oleh siswa.",
              },
            ].map((item, index) => (
              <View key={index} className="flex-row items-start">
                <Ionicons name={item.icon as any} size={24} color="#EF8E4A" />
                <Text
                  className="text-justify text-base leading-7 text-[#555] ml-2"
                  style={{ fontFamily: "LoraRegular" }}
                >
                  {item.description}
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
              "Memilih Menu Materi Pembelajaran:\nKetuk fitur pencarian untuk mencari materi.\nBacalah materi dengan memilih salah satu materi yang ingin dipelajari.\n\nInteraksi dengan Materi:\nKetuk salah satu materi untuk melihat detail materi, dimana detail materi yang dipilih memiliki navigasi untuk membaca materi serta navigasi untuk melihat video terkait materi.",
              "Memilih Menu Latihan:\nBacalah petunjuk pengerjaan sebelum memulai kuis.\nKetuk mulai kuis jika sudah yakin untuk mengerjakan\n\nInteraksi latihan soal:\nSetiap soal diberi waktu 15 detik, jika sudah habis waktu otomatis ke soal selanjutnya\nPengguna dapat mengklik tombol selanjutnya jika sudah memilih jawaban.\nPengguna juga dapat memulai kuis ulang dengan mengetuk mulai setelah mendapatkan skor.",
              "Memilih Tes Code:\nKetuk coba untuk mencoba menguji code bahasa C++.\nUntuk siswa dapat mengetahui tugas apa yang harus dikerjakan dengan mengklik dropdown sesuai dengan kelompoknya.\nCompiler code ini bersidat online yaitu membutuhkan koneksi internet.",
            ].map((item, index) => (
              <View key={index} className="flex-row items-start mt-3">
                <Text
                  className="text-[#EF8E4A] text-base mr-2"
                  style={{ fontFamily: "LoraBold" }}
                >
                  {/* Bullet Point */}
                  {"•"}
                </Text>
                <Text
                  className="text-justify text-base leading-7 text-[#555] ml-2"
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
