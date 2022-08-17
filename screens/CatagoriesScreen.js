import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CatagoryGrid from "../components/CatagoryGrid";

const CatagoriesScreen = ({ navigation }) => {
  function renderCategories(data) {
    function handleScreen() {
      navigation.navigate("Meals", {
        categoryId: data.item.id,
      });
    }
    return (
      <CatagoryGrid
        color={data.item.color}
        title={data.item.title}
        onPress={handleScreen}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategories}
      numColumns={2}
    />
  );
};

export default CatagoriesScreen;

const styles = StyleSheet.create({});
