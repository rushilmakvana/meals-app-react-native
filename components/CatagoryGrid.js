import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const CatagoryGrid = ({ title, color, onPress }) => {
  return (
    <View style={styles.main}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: color },
          pressed && Platform.OS == "ios" ? { opacity: 0.5 } : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innermain}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CatagoryGrid;

const styles = StyleSheet.create({
  main: {
    height: 150,
    margin: 16,
    flex: 1,
    borderRadius: 8,
    elevation: 4,
    // backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowColor: "black",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  innermain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 8,
  },
  text: {
    fontWeight: "bold",
  },
});
