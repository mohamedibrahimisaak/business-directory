import { View, Text } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
export default function Home() {
  return (
    <View>
      {/* <Text style={{fontSize: 40, fontFamily: "outfit-bold"}}>Home</Text> */}
      {/* Header */}

      <Header />
      {/* slider */}
      <Slider />
      {/* business category */}
      <Category />
      {/* popular business List */}
    </View>
  );
}
