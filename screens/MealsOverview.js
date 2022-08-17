import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsOverview = ({ route, navigation }) => {
  const catid = route.params.categoryId;
  const meals = MEALS.filter((item) => item.categoryIds.indexOf(catid) >= 0);
  // console.log(meals);
  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((item) => item.id === catid).title;
    navigation.setOptions({
      title: catTitle,
    });
  }, [navigation, catid]);

  function showMeals(itemdata) {
    const item = itemdata.item;
    const mealitem = {
      title: item.title,
      imgUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      id: item.id,
    };
    return <MealItem {...mealitem} />;
  }
  return (
    <View>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={showMeals}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({});
