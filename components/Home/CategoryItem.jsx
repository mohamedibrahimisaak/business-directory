import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function CategoryItem({ item, onCategoryPress }) {
  return (
    <TouchableOpacity onPress={() => onCategoryPress(item)}>
      <View
        style={{
          padding: 10,
          marginRight: 15,
          borderRadius: 99,
          backgroundColor: Colors.BG,
        }}
      >
        <Image source={{ uri: item.icon }} style={{ width: 40, height: 40 }} />
      </View>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 12,
          color: Colors.TEXT_PRIMARY,
          textAlign: "center",
          marginTop: 5,
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}
