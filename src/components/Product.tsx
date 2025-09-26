import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { ProductType } from "../utilities/types";
import { getCartProducts } from "../context/ProductsCartContext";

type ProductProps = {
  item: ProductType;
};

const Product: React.FC<ProductProps> = ({ item }) => {
  const { setCartProducts }: any = getCartProducts();

  const addProduct = () => {
    setCartProducts((prev: any) => [...prev, item]);
  };

  const deleteProduct = () => {
    setCartProducts((prev: any) =>
      prev.filter((prod: ProductType) => prod.id !== item.id)
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.images[0] }} style={styles.imageStyle} />
      <Text style={styles.prodCategory}>{item.category.name}</Text>
      <Text>{item.title}</Text>
      <Text>{"$ " + item.price}</Text>

      <View style={styles.btnContainer}>
        {/* Add Button */}
        <Pressable
          onPress={addProduct}
          style={({ pressed }) => [
            styles.pressableBtn,
            pressed && styles.pressedStyle,
          ]}
        >
          <Text style={styles.btnText}>{"+"}</Text>
        </Pressable>

        <Text style={styles.btnText}>Add</Text>

        {/* Delete Button */}
        <Pressable
          onPress={deleteProduct}
          style={({ pressed }) => [
            styles.pressableBtn,
            pressed && styles.pressedStyle,
          ]}
        >
          <Text style={styles.btnText}>{"-"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    width: "45%",
    marginLeft: 15,
    marginTop: 12,
  },
  prodCategory: {
    color: "black",
    fontWeight: "bold",
  },
  imageStyle: {
    width: "auto",
    aspectRatio: 1,
  },
  btnContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: "whitesmoke",
  },
  btnText: {
    fontSize: 14,
  },
  pressableBtn: {
    padding: 10,
  },
  pressedStyle: {
    opacity: 0.2, // 👈 press hone par opacity reduce hogi
  },
});

export default Product;
