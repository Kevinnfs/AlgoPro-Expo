import {
  View,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { images } from "@/assets/images";

interface Course {
  id: number;
  title: string;
  image_480x270: ImageSourcePropType;
  is_paid: boolean;
  price: string;
}

interface CourseItemProps {
  course: Course;
  customStyle?: string;
  index: number;
}

const CourseItem: React.FC<CourseItemProps> = ({
  course,
  customStyle,
  index,
}) => {
  return (
    <Pressable
      className={"pt-4 pb- " + (customStyle ? customStyle : "")}
      onPress={() =>
        router.push({
          pathname: "/coursedetail",
          params: { courseId: course.id },
        })
      }
    >
      <Animated.View
        className="gap-2 w-full border border-gray-300 overflow-hidden rounded-2xl"
        entering={FadeInDown.duration(100)
          .delay(index * 300)
          .springify()}
      >
        <Image source={course.image_480x270} className="w-full h-40" />

        <View className="px-4 p-2">
          <Text
            className="text-black text-lg"
            style={{ fontFamily: "LoraBold" }}
          >
            {course.title}
          </Text>

          <View className="flex-row items-center pt-2 pb-4 justify-between ">
            <Text
              className="text-gray-500 text-justify"
              style={{ fontFamily: "LoraMediumItalic" }}
            >
              {course.price}
            </Text>
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default CourseItem;
