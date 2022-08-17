import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { FavoriteContext } from "../store/context/favorite-context";
import FavoriteItem from "../components/FavoriteItem";

const Favorite = () => {
  const Favoritectx = useContext(FavoriteContext);

  if (Favoritectx.ids.length < 1) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>No favorite Meals</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      {Favoritectx.ids.map((id) => (
        <FavoriteItem key={id} id={id} />
      ))}
    </ScrollView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // paddingTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
