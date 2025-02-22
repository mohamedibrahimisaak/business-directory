import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function PopularBusinessCard({ business }) {
  return (
    <View
      style={{
        marginLeft: 20,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 15,
      }}
    >
      <Image
        source={{ uri: business?.imageURL }}
        style={{ width: 250, height: 150, borderRadius: 15 }}
      />
      <View style={{ marginTop: 7, gap: 5 }}>
        <Text style={{ fontFamily: "outfit-medium", fontSize: 15 }}>
          {business.name}
        </Text>
        <Text
          style={{ fontFamily: "outfit", fontSize: 12, color: Colors.GRAY }}
        >
          {business.address}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Image
              source={require("./../../assets/images/star.png")}
              style={{ height: 15, width: 15 }}
            />
            <Text style={{ fontFamily: "outfit" }}>4.5</Text>
          </View>
          <Text
            style={{
              fontFamily: "outfit",
              backgroundColor: Colors.PRIMARY,
              color: "#fff",
              padding: 3,
              fontSize: 10,
              borderRadius: 5,
            }}
          >
            {business.category}
          </Text>
        </View>
      </View>
    </View>
  );
}
