import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../configs/firebaseConfig";
import CategoryItem from "./CategoryItem";

export default function Category() {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = async () => {
    setCategoryList([]); // Clear the list first.
    const q = query(collection(db, "Category"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      setCategoryList((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <View>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          Category
        </Text>
        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          View All
        </Text>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginLeft: 20 }}
        data={categoryList}
        renderItem={({ item, index }) => (
          <CategoryItem
            item={item}
            key={index}
            onCategoryPress={(item) => console.log(item)}
          />
        )}
      />
    </View>
  );
}
