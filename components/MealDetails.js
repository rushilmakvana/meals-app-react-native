import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetails = ({
  style,
  duration,
  complexity,
  affordability,
  textstyle,
}) => {
  return (
    <View style={[styles.innerview, style]}>
      <Text style={[styles.text, textstyle]}>{duration}m</Text>
      <Text style={[styles.text, textstyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.text, textstyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  innerview: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  text: {
    paddingHorizontal: 10,
  },
});
