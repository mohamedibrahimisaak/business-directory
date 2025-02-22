import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { db } from "../../configs/firebaseConfig";
import { useEffect } from "react";
import { query, collection, getDocs } from "firebase/firestore";

export default function Slider() {
  const [sliderList, setSliderList] = React.useState([]);
  useEffect(() => {
    getSliderList();
  }, []);
  const getSliderList = async () => {
    setSliderList([]); // Clear the list first.
    // const q = query(collection(db,'sliders'));
    const q = query(collection(db, "sliders"));
    const queySnapshhot = await getDocs(q);
    queySnapshhot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      setSliderList((prev) => [...prev, doc.data()]);
      // Use the data here.
    });
  };
  return (
    <View>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 20,
          paddingLeft: 20,
          paddingTop: 20,
          marginBottom: 5,
        }}
      >
        #Special For You
      </Text>
      <FlatList
        data={sliderList}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item.imageURL }}
            style={{
              width: 300,
              height: 150,
              borderRadius: 15,
              marginRight: 15,
            }}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
