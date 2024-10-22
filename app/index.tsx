import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "./(tabs)/Title.js";
import Main from "./(tabs)/Main.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});
