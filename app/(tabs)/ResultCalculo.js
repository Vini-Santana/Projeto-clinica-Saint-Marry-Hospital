import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ResultCalculo(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.result}>{props.mostraResultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
  },
});
