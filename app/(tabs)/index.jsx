import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
import PopularBusiness from "../../components/Home/PopularBusiness";
export default function Home() {
  return (
    <ScrollView>
      {/* <Text style={{fontSize: 40, fontFamily: "outfit-bold"}}>Home</Text> */}
      {/* Header */}

      <Header />
      {/* slider */}
      <Slider />
      {/* business category */}
      <Category />
      {/* popular business List */}
      <PopularBusiness />
      <View style={{ height: 50 }}></View>
    </ScrollView>
  );
}
