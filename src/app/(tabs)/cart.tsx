import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import { getCartProducts } from "@/src/context/ProductsCartContext";
import Product from "@/src/components/Product";

const cart = () => {
  const { cartProducts }: any = getCartProducts();
  console.log(cartProducts);
  if (cartProducts?.length === 0) return <ActivityIndicator />;
  return (
    <View style={{ flex: 1, padding: 5 }}>
      <FlatList
        data={cartProducts}
        keyExtractor={(item) => item.id.toString}
        renderItem={({ item }) => {
          return <Product item={item} />;
        }}
        numColumns={2}
      />
    </View>
  );
};

export default cart;
