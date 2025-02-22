import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function Header() {
  const { user } = useUser();
  return (
    <View
      style={{
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    >
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ width: 45, height: 45, borderRadius: 99 }}
        />
        <View>
          <Text style={{ color: "#fff" }}>Welcome,</Text>
          <Text
            style={{ fontSize: 19, fontFamily: "outfit-medium", color: "#fff" }}
          >
            {user?.fullName}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          backgroundColor: "#fff",
          padding: 5,
          marginVertical: 10,
          marginTop: 20,
          borderRadius: 8,
        }}
      >
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput
          placeholder="search..."
          style={{ fontFamily: "outfit", fontSize: 16 }}
        />
      </View>
    </View>
  );
}
