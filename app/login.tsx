import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const createUsuario = async () => { //USAR ESSE MÉTODONA TELA DE CRIAR USUÁRIO/PACIENTE
    try {
      const response = await fetch(`http://192.168.15.7:8080/login/createUsuario?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`, {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const data = await response.json();
      if (data.code === 1) {
        setResponseMessage("Cadastro Efetuado com sucesso");
      } else {
        setResponseMessage(data.message);
      }

    } catch (error) {
      setResponseMessage("Erro ao conectar ao serviço: " + error.message); //ERRO AO CONECTAR AO SERVIDOR
    }
  };

  const validaLogin = async () => {
    try {
      const response = await fetch(`http://192.168.15.7:8080/login/validaLogin?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`, {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.code === 1) {
        setResponseMessage("Login Efetuado com sucesso");
      } else {
        setResponseMessage(data.message);
      }
    } catch (error) {
      setResponseMessage("Erro ao conectar ao serviço: " + error.message);
    }
  };

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

      <TouchableOpacity style={styles.SignInButton} onPress={createUsuario} >
        <Text style={styles.SignInButtonText}>Entrar</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.criarCadastro} onPress={""} >
        <Text style={styles.criarCadastro}>Criar cadastro</Text>
      </TouchableOpacity>
      
      {responseMessage.startsWith("Usuário") ? (
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
    placeholderTextColor:"#D9D9D9",

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
  criarCadastro: {
    width: 272,
    textAlign: "left", 
    marginBottom: 5,
    fontSize: 15,
    textDecorationLine: "underline",
  },
});
