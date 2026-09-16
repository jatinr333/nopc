import React from "react";
import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; // <-- Import the router
import { Ionicons } from "@expo/vector-icons";

// (Include your styling and Icon component here)

export default function Home() {
  const router = useRouter(); // <-- Initialize the router

  return (
    <ScrollView contentContainerStyle={s.content}>
      {/* Example of how to navigate to the Create screen */}
      <Pressable style={s.start} onPress={() => router.push("/create")}>
        <View style={s.plus}><Ionicons name="add" size={28} color="#0F9D83" /></View>
        <View style={{ flex: 1 }}>
          <Text style={s.cardTitle}>Upload a prescription</Text>
          <Text style={s.meta}>Turn a clinician-provided prescription into a verified routine.</Text>
        </View>
        <Ionicons name="chevron-forward" color="#0F9D83" />
      </Pressable>
      
      {/* Add the rest of your Home screen UI here */}
    </ScrollView>
  );
}
