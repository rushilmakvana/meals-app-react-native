import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

const MealItem = ({
  title,
  imgUrl,
  duration,
  complexity,
  affordability,
  id,
}) => {
  const navigation = useNavigation();
  // console.log(id);
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => {
          pressed && Platform.OS == "ios" ? { opacity: 0.5 } : null;
        }}
        onPress={() => {
          navigation.navigate("Making", {
            id: id,
          });
        }}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={{ overflow: "hidden", borderRadius: 8 }}>
          <View>
            <Image style={styles.image} source={{ uri: imgUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    backgroundColor: "white",
    elevation: 4,
    overflow: Platform.OS == "android" ? "hidden" : "visible",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 16,
  },
});
