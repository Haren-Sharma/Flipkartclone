import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Category } from "../utilities/types";

type CategoryComponentProps = {
  category: Category;
  selected: boolean;
};

const CategoryComponent: React.FC<CategoryComponentProps> = ({
  category: { uri, name },
  selected,
}) => {
  return (
    <View style={[styles.container, selected && { backgroundColor: "yellow" }]}>
      <Image
        source={{ uri }}
        style={{
          width: 40,
          height: 40,
        }}
      />
      <Text style={[styles.text, selected && { color: "black" }]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "white",
  },
  text: {
    marginTop: 10,
    color: "white",
  },
});

export default CategoryComponent;
