import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";


export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [responseMessage, setResponseMessage] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [perfilDeAcesso, setPerfilDeAcesso] = useState("");

  const createUsuario = async () => {
    try {
      const response = await fetch(`http://192.168.15.7:8080/paciente/createPacienteUsuario?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&cpf=${encodeURIComponent(cpf)}&senha=${encodeURIComponent(senha)}&perfilDeAcesso=1`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.code === 1) {
        setResponseMessage("Cadastro efetuado com sucesso");
        router.push('/login'); // Redireciona para a tela principal
      } else {
        setResponseMessage(data.message);
      }
    } catch (error) {
      setResponseMessage("Erro ao conectar ao serviço: " + (error instanceof Error ? error.message : "Erro desconhecido"));
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: '../assets/images/Logo-icon.png' }} style={styles.logo} />

      <Text style={styles.label}>Nome Completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome completo"
        value={nome}
        onChangeText={setNome} />

      <Text style={styles.label}>CPF</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu CPF"
        keyboardType="numeric"
        value={cpf}
        onChangeText={setCpf} />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail} />

      <Text style={styles.label}>Senha</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Digite sua senha"
          secureTextEntry={!showPassword}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={createUsuario}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      {responseMessage ? (
        <Text style={styles.response}>{responseMessage}</Text>
      ) : null}

      <TouchableOpacity style={styles.voltarButton} onPress={() => router.push('/login')}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  inputPassword: {
    flex: 1,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  voltarButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#008000',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  response: {
    width: 272,
    textAlign: "left",
    marginTop: 10,
    fontSize: 16,
    color: "red", // Alerta de erro em vermelho
  },
});