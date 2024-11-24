import { View, Text, Pressable } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface ButtonProps {
  title: string;
  action?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, action }: ButtonProps) => {
  return (
    <Pressable
      onPress={action}
      style={{ backgroundColor: Colors.basicBlue }} // Menggunakan warna dari Colors
      className="rounded-3xl justify-center items-center py-4 w-3/4"
    >
      <Text className="text-black font-bold text-xl">{title}</Text>
    </Pressable>
  );
};

export default Button;
