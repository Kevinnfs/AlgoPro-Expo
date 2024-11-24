import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { images } from "@/assets/images";
import { useLocalSearchParams } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { courseDetails } from "@/constants/data";
import { WebView } from "react-native-webview";

interface MateriContentItem {
  subBab: string;
  content: string;
  images: (string | { uri: string })[];
  additionalTexts?: (string | { uri: string })[]; // Memungkinkan string atau objek gambar
}

const SegmentedControl: React.FC<{
  selectedSegment: "materi" | "video";
  onSegmentChange: (segment: "materi" | "video") => void;
}> = ({ selectedSegment, onSegmentChange }) => (
  <View className="flex-row mb-4 bg-gray-200 rounded-lg p-1 mt-6">
    <Pressable
      onPress={() => onSegmentChange("materi")}
      className={`flex-1 py-3 rounded-md ${
        selectedSegment === "materi" ? "bg-[#EF8E4A]" : "bg-transparent"
      }`}
    >
      <Text
        className={`text-center ${
          selectedSegment === "materi" ? "text-white" : "text-gray-700"
        }`}
        style={{
          fontFamily: selectedSegment === "materi" ? "LoraBold" : "LoraMedium",
        }}
      >
        Materi
      </Text>
    </Pressable>

    <Pressable
      onPress={() => onSegmentChange("video")}
      className={`flex-1 py-3 rounded-md ${
        selectedSegment === "video" ? "bg-[#EF8E4A]" : "bg-transparent"
      }`}
    >
      <Text
        className={`text-center ${
          selectedSegment === "video" ? "text-white" : "text-gray-700"
        }`}
        style={{
          fontFamily: selectedSegment === "video" ? "LoraBold" : "LoraMedium",
        }}
      >
        Video
      </Text>
    </Pressable>
  </View>
);

const Coursedetail = () => {
  const { courseId } = useLocalSearchParams<{ courseId: string }>();
  const [selectedSegment, setSelectedSegment] = useState<"video" | "materi">(
    "materi"
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const course = courseDetails.find(
    (c) => c.id === parseInt(courseId || "", 10)
  );

  if (!course) return <Text>Course not found</Text>;

  const openImageModal = (image: any) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const formatBulletText = (text: string) => {
    return text.split("\n").map((line, index) => (
      <Text
        key={index}
        className="text-md text-justify leading-7"
        style={{
          marginLeft: line.trim().startsWith("•") ? 20 : 0,
          fontFamily: "LoraRegular",
          marginVertical: 5,
        }}
      >
        {line}
      </Text>
    ));
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image source={images[course.id]} className="w-full h-72 rounded-lg" />
      }
    >
      <View className="-ml-3">
        <Text className="text-2xl" style={{ fontFamily: "LoraBold" }}>
          {course?.title}
        </Text>

        <SegmentedControl
          selectedSegment={selectedSegment}
          onSegmentChange={setSelectedSegment}
        />

        {selectedSegment === "materi" ? (
          <ScrollView className="mt-4" style={{ padding: 3 }}>
            {course.intro && (
              <View style={{ marginBottom: 20 }}>
                {formatBulletText(course.intro)}
              </View>
            )}

            {course.materiContent.map((section: MateriContentItem, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: "#c4c6c8",
                  padding: 15,
                  marginVertical: 10,
                  borderRadius: 10,
                  shadowColor: "#9a9ea3",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 5,
                  elevation: 3,
                }}
              >
                <Text className="text-xl" style={{ fontFamily: "LoraBold" }}>
                  {index + 1}. {section.subBab}
                </Text>
                {formatBulletText(section.content)}
                {section.images?.map((imageUri, imgIndex) => (
                  <TouchableOpacity
                    key={imgIndex}
                    onPress={() => openImageModal(imageUri)}
                  >
                    <Image
                      source={
                        typeof imageUri === "string"
                          ? { uri: imageUri }
                          : imageUri
                      }
                      style={{ width: "100%", height: 150, marginTop: 2 }}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                ))}
                {section.additionalTexts?.map(
                  (textOrImage, textIndex: number) =>
                    typeof textOrImage === "string" ? (
                      formatBulletText(textOrImage)
                    ) : (
                      <TouchableOpacity
                        key={textIndex}
                        onPress={() => openImageModal(textOrImage)}
                      >
                        <Image
                          source={textOrImage}
                          style={{
                            width: "100%",
                            height: 150,
                            marginVertical: 10,
                          }}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    )
                )}
              </View>
            ))}
          </ScrollView>
        ) : (
          <ScrollView>
            {Array.isArray(course.videoContent) &&
            course.videoContent.length > 0 ? (
              course.videoContent.map((video, index) => (
                <View key={index} style={{ marginBottom: 20, marginTop: 20 }}>
                  {/* Judul Video */}
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      marginBottom: 8,
                      color: "#333",
                      textAlign: "center",
                    }}
                  >
                    {video.title}
                  </Text>

                  {/* Video dalam Card */}
                  <View
                    style={{
                      borderWidth: 2,
                      borderColor: "#777B7E",
                      borderRadius: 10,
                      overflow: "hidden",
                      height: 200, // Tinggi tetap untuk tampilan video
                    }}
                  >
                    <WebView
                      source={{ uri: video.source }}
                      allowsInlineMediaPlayback
                      style={{
                        width: "100%",
                        aspectRatio: 16 / 9, // Proporsi layar 16:9
                      }}
                    />
                  </View>
                </View>
              ))
            ) : (
              <Text style={{ textAlign: "center", marginTop: 50 }}>
                Video tidak tersedia
              </Text>
            )}
          </ScrollView>
        )}
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.8)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ position: "absolute", top: 40, right: 20 }}
            onPress={() => setModalVisible(false)}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Close</Text>
          </TouchableOpacity>
          {selectedImage && (
            <Image
              source={
                typeof selectedImage === "string"
                  ? { uri: selectedImage }
                  : selectedImage
              }
              style={{ width: "100%", height: "80%", resizeMode: "contain" }}
            />
          )}
        </View>
      </Modal>
    </ParallaxScrollView>
  );
};

export default Coursedetail;
