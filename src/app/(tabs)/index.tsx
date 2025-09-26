import {
  View,
  StyleSheet,
  Pressable,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Category from "@/src/components/Category";
import { Categories } from "@/src/utilities/mockData";
import { ProductType } from "@/src/utilities/types";
import Product from "@/src/components/Product";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<Number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [products, setProducts] = useState<ProductType[]>([]);

  const getProducts = async () => {
    const raw = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await raw.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

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
                <Category
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
          onChangeText={(text) => setInputValue(text)}
        />
      </View>
      {/*
        Product Listing
      */}
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => (
          <ActivityIndicator style={{ marginTop: 20 }} color="red" size={30} />
        )}
        data={products}
        renderItem={({ item }) => {
          return <Product item={item} />;
        }}
        numColumns={2}
      />
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
    fontStyle: "italic",
  },
});

export default Home;
