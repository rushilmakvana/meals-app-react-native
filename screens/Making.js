import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import Iconbtn from "../components/Iconbtn";
import { FavoriteContext } from "../store/context/favorite-context";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { addfavorite, removefavorite } from "../store/redux/store";
const Making = ({ route, navigation }) => {
  // const favoritemeals = useSelector((state) => state.favoritemeals.ids);
  const Favoritectx = useContext(FavoriteContext);
  const id = route.params.id;
  // console.log(Favoritectx);
  const isSelectedMeal = Favoritectx.ids.includes(id);
  // const dispatch = useDispatch();
  // const isSelectedMeal = favoritemeals.includes(id);

  function onpresshandler() {
    if (isSelectedMeal) {
      console.log("removed - ", id);
      Favoritectx.removeFavorite(id);
      // dispatch(removefavorite({ id: id }));
    } else {
      console.log("added - ", id);
      Favoritectx.addFavorite(id);
      // dispatch(addfavorite({ id: id }));
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Iconbtn
          name={isSelectedMeal ? "star" : "star-outline"}
          size={24}
          color={"white"}
          onPress={onpresshandler}
        />
      ),
    });
  }, [navigation, onpresshandler]);

  //   console.log(id);
  const recipe = MEALS.find((item) => item.id === id);
  // console.log(recipe);
  return (
    <ScrollView>
      <View style={styles.root}>
        <Image style={styles.image} source={{ uri: recipe.imageUrl }} />
        <Text style={styles.title}>{recipe.title}</Text>
        <MealDetails
          duration={recipe.duration}
          affordability={recipe.affordability}
          complexity={recipe.complexity}
          textstyle={styles.text}
          style={styles.lessmargin}
        />
        <Subtitle>Ingredients</Subtitle>
        <List data={recipe.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={recipe.steps} />
      </View>
    </ScrollView>
  );
};

export default Making;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginVertical: 8,
  },
  text: {
    color: "white",
  },
  root: {
    marginBottom: 30,
  },
  lessmargin: {
    marginBottom: 4,
  },
});
