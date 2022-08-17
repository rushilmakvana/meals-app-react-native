import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealItem from "./MealItem";

const FavoriteItem = ({ id }) => {
  const meal = MEALS.find((item) => item.id === id);
  const mealitem = {
    title: meal.title,
    imgUrl: meal.imageUrl,
    duration: meal.duration,
    complexity: meal.complexity,
    affordability: meal.affordability,
    id: meal.id,
  };
  return <MealItem {...mealitem} />;
  //   console.log(meal.id);
  return;
};

export default FavoriteItem;

const styles = StyleSheet.create({});
