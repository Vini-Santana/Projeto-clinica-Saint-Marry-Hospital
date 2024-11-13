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
      const response = await fetch(`http://172.19.12.87:8080/login/createUsuario?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`, {
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
      const response = await fetch(`http://172.19.12.87:8080/login/validaLogin?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`, {
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
    borderRadius: 75,  // Torna a imagem redonda
  },
  title: {
    fontSize: 44,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333', // Cor escura para título
  },
  input: {
    width: 272,
    height: 45,
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    textAlign: "left",
    marginBottom: 15,
    borderColor: "#D9D9D9",
    backgroundColor: "#f5f5f5", // Fundo leve no input
  },
  SignInButton: {
    width: 272,
    backgroundColor: "#000", // Fundo preto para o botão
    padding: 12,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 20,
    elevation: 5, // Adiciona sombra para o botão
  },
  SignInButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    width: 272,
    textAlign: "left",
    marginBottom: 5,
    fontSize: 16,
    color: "#333",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5", // Fundo claro para a tela
  },
  response: {
    width: 272,
    textAlign: "left",
    marginTop: 10,
    fontSize: 16,
    color: "red", // Alerta de erro em vermelho
  },
  criarCadastroText: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#008000", // Verde neon para o link
    marginTop: 10,
  },
});