import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const Iconbtn = ({ name, color, onPress, size }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.press}
      onPress={onPress}
    >
      <Ionicons name={name} color={color} size={size} />
    </Pressable>
  );
};

export default Iconbtn;

const styles = StyleSheet.create({
  press: {
    opacity: 0.75,
  },
});
