import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ data }) => {
  // console.log(data);
  return data.map((text) => (
    <View key={text} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "#e2b497",
    padding: 4,
    marginVertical: 4,
    marginHorizontal: 35,
  },
  text: {
    textAlign: "center",
  },
});
