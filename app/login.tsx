import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const router = useRouter();

  const createUsuario = async () => {
    try {
      const response = await fetch(`http://192.168.1.203:8080/login/createUsuario?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setResponseMessage(data.code === 1 ? "Cadastro efetuado com sucesso" : data.message);
    } catch (error) {
      setResponseMessage("Erro ao conectar ao serviço: " + (error instanceof Error ? error.message : "Erro desconhecido"));
    }
  };

  const validaLogin = async () => {
    try {
      const response = await fetch(`http://192.168.1.203:8080/login/validaLogin?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.code === 1) {
        setResponseMessage("Login efetuado com sucesso");
        router.push('/menuprincipal'); // Redireciona para a tela principal
      } else {
        setResponseMessage(data.message);
      }
    } catch (error) {
      setResponseMessage("Erro ao conectar ao serviço: " + (error instanceof Error ? error.message : "Erro desconhecido"));
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Logo-icon.png')} style={styles.image} />
      <Text style={styles.title}>Login</Text>

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        onChangeText={setSenha}
        value={senha}
        placeholder="Digite sua senha"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.SignInButton} onPress={validaLogin}>
        <Text style={styles.SignInButtonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={createUsuario}>
        <Text style={styles.criarCadastroText}>Criar cadastro</Text>
      </TouchableOpacity>

      {responseMessage ? (
        <Text style={styles.response}>{responseMessage}</Text>
      ) : null}
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
    textAlign: "left",
    marginBottom: 5,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  response: {
    width: 272,
    textAlign: "left",
    marginBottom: 5,
    fontSize: 16,
    color: "red",
  },
  criarCadastroText: {
    fontSize: 15,
    textDecorationLine: "underline",
    color: "#0000FF",
  },
});
