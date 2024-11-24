import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#EF8E4A", // Warna ikon dan teks saat dipilih
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault, // Warna ikon dan teks saat tidak dipilih
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Beranda",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Materi",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "school" : "school-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="latihan"
        options={{
          title: "Latihan",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "ribbon" : "ribbon-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="code"
        options={{
          title: "Tes Code",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
