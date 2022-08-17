import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  container: {
    // fontSize: 18,
    padding: 6,
    marginHorizontal: 35,
    marginVertical: 4,
    borderColor: "transparent",
    borderBottomColor: "#e2b497",
    borderWidth: 2,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#e2b497",
    textAlign: "center",
  },
});
