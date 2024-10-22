import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ResultCalculo from "./ResultCalculo.js";


export default function Form() {
  const [entrada, setEntrada] = useState(null);
  const [valorGuardado, setValorGuardado] = useState(null);
  const [messageResult, setMessageResult] = useState(null);

  function fazConta(codigoConta) {
    if (entrada != null) {
      if (valorGuardado != null) {
        switch (codigoConta) {
          case 1:
            setValorGuardado(Number(entrada) + Number(valorGuardado));
            setMessageResult(Number(entrada) + Number(valorGuardado));
            break;
          case 2:
            setValorGuardado(Number(valorGuardado) - Number(entrada));
            setMessageResult(Number(valorGuardado) - Number(entrada));
            break;
          case 3:
            setValorGuardado(Number(valorGuardado) * Number(entrada));
            setMessageResult(Number(valorGuardado) * Number(entrada));
            break;
          case 4:
            setValorGuardado(Number(valorGuardado) / Number(entrada));
            setMessageResult(Number(valorGuardado) / Number(entrada));
            break;
          default:
            break;
        }
      } else {
        setValorGuardado(entrada);
        setMessageResult(entrada);
      }
      setEntrada(0);
    }
  }

  function limpaValorGuardado() {
    if (valorGuardado != null) {
      setValorGuardado(0);
      setMessageResult(null);
      setEntrada(0);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEntrada}
        value={entrada}
        placeholder="Digite um número"
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => fazConta(1)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => fazConta(2)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => fazConta(3)}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => fazConta(4)}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.clearButton]}
        onPress={() => limpaValorGuardado()}
      >
        <Text style={[styles.buttonText, styles.clearButtonText]}>Clear</Text>
      </TouchableOpacity>
      <ResultCalculo mostraResultado={messageResult} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
  },
  clearButton: {
    backgroundColor: "#ff3333",
    width: "60%",
  },
  clearButtonText: {
    fontSize: 20,
  },
});
