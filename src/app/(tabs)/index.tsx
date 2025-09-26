import { View, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import CategoryComponent from "@/src/components/CategoryComponent";
import { Categories } from "@/src/utilities/mockData";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<Number>(0);
  const [inputValue,setInputValue]=useState("");
  return (
    <View style={styles.container}>
      {/*
      Header
        - 3 category components
        - search box
      */}
      <View style={styles.header}>
        {/*3 categories*/}
        <View style={styles.categories}>
          {Categories?.map((category, i) => {
            return (
              <Pressable
                onPress={() => {
                  setSelectedCategory(i);
                }}
              >
                <CategoryComponent
                  selected={selectedCategory === i}
                  key={category.name}
                  category={category}
                />
              </Pressable>
            );
          })}
        </View>
        {/*search box*/}
        <TextInput
          style={styles.inputBox}
          placeholder="Type Something To Search"
          value={inputValue}
          onChangeText={(text)=>setInputValue(text)}
        />
      </View>
      {/*
        Product Listing
      */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#510fac",
    paddingTop: 40,
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "",
  },
  inputBox: {
    backgroundColor: "white",
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    fontStyle:"italic"
  },
});

export default Home;
