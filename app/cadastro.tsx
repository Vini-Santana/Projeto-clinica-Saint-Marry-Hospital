import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={{ uri: '../assets/images/Logo-icon.png' }} style={styles.logo} />

      <Text style={styles.label}>Nome Completo</Text>
      <TextInput style={styles.input} placeholder="Value" />

      <Text style={styles.label}>CPF</Text>
      <TextInput style={styles.input} placeholder="Value" keyboardType="numeric" />

      <Text style={styles.label}>E-mail</Text>
      <TextInput style={styles.input} placeholder="Value" keyboardType="email-address" />

      <Text style={styles.label}>Telefone</Text>
      <TextInput style={styles.input} placeholder="Value" keyboardType="phone-pad" />

      <Text style={styles.label}>Senha</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Value"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrar</Text>
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
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});