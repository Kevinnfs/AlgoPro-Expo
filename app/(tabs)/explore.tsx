import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  ActivityIndicator,
  ImageSourcePropType,
} from "react-native";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CourseItem from "@/components/CourseItem";
import { images } from "@/assets/images";
import { Image } from "react-native";

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

const fetchCourses = async (searchTerm: string): Promise<SearchResponse> => {
  const allCourses = [
    {
      id: 1,
      title: "Algoritma",
      image_480x270: images[1], // Mengakses gambar berdasarkan id
      is_paid: false,
      price:
        "Materi ini akan mempelajari bagaimana cara menyajikan algoritma dalam bentuk simbol instruksi, diagram alir (flowchart), dan kode semu (pseudocode).",
    },
    {
      id: 3,
      title: "Bahasa Pemrograman C dan C++",
      image_480x270: images[3],
      is_paid: true,
      price:
        "Materi ini akan menjelaskan pengantar singkat mengenai bahasa C dan C++, dari konsep dasar hingga perbedaan atau perbandingan Bahasa Pemrograman C dan C++. Serta langkah-langkah instalasi software untuk membuat program bahasa C++",
    },
    {
      id: 4,
      title: "Komponen Program dalam Bahasa C++",
      image_480x270: images[4],
      is_paid: true,
      price:
        "Materi ini akan menjelaskan komponen-komponen penyusun dalam penulisan bahasa pemrograman C++.",
    },
    {
      id: 5,
      title: "Ekspresi",
      image_480x270: images[5],
      is_paid: true,
      price:
        "Materi ekspresi membahas tentang konsep ekspresi dalam pemrograman, yaitu kombinasi variabel, operator, dan nilai yang menghasilkan suatu hasil.",
    },
    {
      id: 6,
      title: "Struktur Kontrol Keputusan",
      image_480x270: images[6],
      is_paid: true,
      price:
        "Membahas cara membuat keputusan dalam program menggunakan perintah percabangan, seperti if-else dan switch-case.",
    },
    {
      id: 7,
      title: "Struktur Kontrol Perulangan",
      image_480x270: images[7],
      is_paid: true,
      price:
        "Materi ini membahas cara membuat program yang menjalankan instruksi secara berulang hingga kondisi tertentu terpenuhi.",
    },
    {
      id: 8,
      title: "Fungsi",
      image_480x270: images[8],
      is_paid: true,
      price:
        "Materi ini membahas blok kode yang dibuat untuk melakukan tugas tertentu. Fungsi mempermudah pekerjaan dengan mengurangi pengulangan kode dan membuat program lebih rapi. Dengan fungsi, kita bisa memanggil kode kapan saja tanpa menulis ulang.",
    },
  ];
  const filteredCourses = allCourses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { results: filteredCourses };
};

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["searchCourses", searchQuery],
    queryFn: () => fetchCourses(searchQuery),
    enabled: true,
  });

  const handleSearch = () => {
    setSearchQuery(searchTerm);
    refetch();
  };

  return (
    <View className="flex-1 py-12 bg-white">
      <View className="p-4 pb-12">
        <View className="flex-row mb-4 w-full border-2 border-neutral-400 rounded-2xl overflow-hidden bg-white">
          <TextInput
            className="p-2 ml-2 w-3/4 "
            placeholder="Cari Materi"
            placeholderTextColor="gray"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <Pressable
            className="bg-[#8CD9D3] w-1/4 p-4 justify-center items-center"
            onPress={handleSearch}
          >
            <Text className="text-white" style={{ fontFamily: "LoraBold" }}>
              Search{" "}
            </Text>
          </Pressable>
        </View>

        {isLoading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="#2563eb" />
          </View>
        ) : error ? (
          <Text>Error: {(error as Error).message}</Text>
        ) : data?.results ? (
          <FlatList
            data={data.results}
            renderItem={({ item }) => <CourseItem course={item} index={0} />}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <View className="flex-1 justify-center items-center">
            <Text>No Results</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Explore;
