import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [user, setUser] = useState(null);
  const [senha, setSenha] = useState(null);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/Logo-icon.png')} 
        style={styles.image} 
      />
      <Text style={styles.title}>Login</Text>

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUser}
        value={user}
        placeholder="Digite seu email"
        placeholderTextColor={"#D9D9D9"}

      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        onChangeText={setSenha}
        value={senha}
        placeholder="Digite sua senha"
        placeholderTextColor={"#D9D9D9"}
        secureTextEntry={true}

      />

      <TouchableOpacity style={styles.SignInButton}>
        <Text style={styles.SignInButtonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Criar cadastro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginTop: 50,
  },
  
  title: {
    fontSize: 44,
    fontFamily: "Montserrat",
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    width: 272,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    textAlign: "left",
    marginBottom: 10, 
    borderColor: "#D9D9D9",
  },
  
  SignInButton: {
    width: 272,
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    margin: 10,
  },
  SignInButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  text: {
    width: 272,
    textAlign: "left", // Alinha o texto à esquerda
    marginBottom: 5, // Dá um pequeno espaço entre o texto e o campo de input
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
});
