import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "./(tabs)/Title.js";
import Main from "./(tabs)/Main.js";
import Login from "./login.tsx";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Title />
      <Main /> */}
      <Login/>
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