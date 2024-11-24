import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  Animated,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { WebView } from "react-native-webview";
import Ionicons from "@expo/vector-icons/Ionicons";

type NavigateTo = (screen: string) => void;

const Code: React.FC<{ navigateTo: NavigateTo }> = ({ navigateTo }) => {
  // State untuk dropdown aktif
  const [selectedDropdown, setSelectedDropdown] = useState<string | null>(null);

  // Data untuk dropdown
  const dropdownData = [
    {
      label: "Kelompok 1",
      content:
        "Buat program untuk menghitung luas dan keliling sebuah lingkaran berdasarkan input jari-jari. Gunakan konstanta PI = 3.14159.",
    },
    {
      label: "Kelompok 2",
      content:
        "Buat program yang menentukan kategori usia seseorang berdasarkan input usia.",
    },
    {
      label: "Kelompok 3",
      content:
        "Buat program yang menampilkan semua bilangan genap dari 1 hingga 200 menggunakan perulangan menggunakan for dan while.",
    },
    {
      label: "Kelompok 4",
      content:
        "Buatlah fungsi untuk menginput nilai dan menampilkan status kelulusan siswa ",
    },
  ];

  const [rotation] = useState(new Animated.Value(0)); // Nilai awal

  const handleToggle = (label: string) => {
    const isOpen = selectedDropdown === label;

    // Animasi rotasi
    Animated.timing(rotation, {
      toValue: isOpen ? 0 : 1, // 0 jika menutup, 1 jika membuka
      duration: 300,
      useNativeDriver: true,
    }).start();

    setSelectedDropdown(isOpen ? null : label);
  };

  // Rotasi ikon
  const rotateIcon = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* Header */}
      <View
        style={{
          paddingTop: 56,
          paddingBottom: 24,
          backgroundColor: "#EF8E4A",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Tes Code
        </Text>
      </View>

      {/* Konten */}
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        {/* Kartu */}
        <View
          style={{
            margin: 24,
            padding: 24,
            backgroundColor: "#F18E33",
            borderRadius: 16,
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 4,
            alignItems: "center",
          }}
        >
          {/* Teks dan Logo */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontFamily: "LoraBold" }}>Pemrograman Bahasa</Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: 20,
                }}
              >
                C++{" "}
                <Text style={{ fontFamily: "LoraMedium" }}>
                  jalankan online
                </Text>
              </Text>
            </View>
            <Image
              source={require("../../assets/images/logocc.png")}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          </View>

          {/* Tombol */}
          <Pressable
            onPress={() => navigateTo("WebViewScreen")}
            style={{
              marginTop: 24,
              backgroundColor: "white",
              borderRadius: 9999,
              paddingVertical: 12,
              paddingHorizontal: 48,
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#ccc",
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 6,
              elevation: 3,
            }}
          >
            <Text
              style={{ color: "#333", fontFamily: "LoraMedium", fontSize: 16 }}
            >
              coba
            </Text>
          </Pressable>
        </View>
        {/* Dropdowns */}
        {dropdownData.map((item, index) => (
          <View
            key={index}
            style={{
              margin: 16,
              marginBottom: 3,
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 8,
              backgroundColor: "white",
            }}
          >
            <Pressable
              onPress={() => handleToggle(item.label)}
              style={{
                padding: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#F18E33",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {item.label}
              </Text>

              {/* Ikon rotasi */}
              <Animated.View
                style={{
                  transform: [
                    {
                      rotate:
                        selectedDropdown === item.label ? rotateIcon : "0deg",
                    },
                  ],
                }}
              >
                <Ionicons name="chevron-down" size={20} color="white" />
              </Animated.View>
            </Pressable>

            {/* Konten Dropdown */}
            {selectedDropdown === item.label && (
              <View
                style={{
                  padding: 16,
                  backgroundColor: "#FDEBDD",
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              >
                <Text style={{ fontSize: 14, color: "#333" }}>
                  {item.content}
                </Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const WebViewScreen: React.FC<{ navigateTo: NavigateTo }> = ({
  navigateTo,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: 56,
          paddingBottom: 24,
          backgroundColor: "#EF8E4A",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      >
        <Pressable
          onPress={() => navigateTo("Code")}
          style={{
            padding: 8,
            borderRadius: 9999,
            backgroundColor: "#fbb17d",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18, color: "white" }}>{"<"}</Text>
        </Pressable>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Online Compiler
        </Text>
      </View>
      <WebView
        source={{
          uri: "https://www.programiz.com/cpp-programming/online-compiler/",
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<string>("Code");

  const navigateTo: NavigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <View style={{ flex: 1 }}>
      {currentScreen === "Code" && <Code navigateTo={navigateTo} />}
      {currentScreen === "WebViewScreen" && (
        <WebViewScreen navigateTo={navigateTo} />
      )}
    </View>
  );
};

export default App;
