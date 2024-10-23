import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";

export default function App() {
  const [user, setUser] = useState(null);
  const [senha, setSenha] = useState(null);

  return (
    <View style={styles.container}>
      {/* Imagem precisa estar dentro do JSX retornado */}
      <Image 
        source={require('../assets/images/Logo-icon.png')} 
        style={styles.image} 
      />
      <Text style={styles.title}>Login</Text>
      <Text> Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUser}
        value={user}
        placeholder="Digite seu email"
        // keyboardType="numeric"
      />
      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        onChangeText={setSenha}
        value={senha}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        marginTop= {10}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  image:{
    width: 200,
    height: 200,
    marginTop: 50,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#333",
    fontFamily: "Montserrat",
    marginTop: 20,
    marginBottom: 20,
  },
  
  input: {
    width: 200,
    height: 40,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlign: "center",
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
});
