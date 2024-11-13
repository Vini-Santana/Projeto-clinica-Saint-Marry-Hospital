import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function MarcarConsultas() {
  const [selectedDate, setSelectedDate] = useState("17/10/2024");
  const router = useRouter();

  const horariosDisponiveis = [
    { id: "1", descricao: "Consulta", horario: "17/10/2024 - 09:00" },
    { id: "2", descricao: "Consulta", horario: "17/10/2024 - 09:30" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Agendar Exame</Text>

      <Text style={styles.label}>Exames Disponiveis</Text>
      <TextInput style={styles.input} placeholder="Selecionar exame" />

      <Text style={styles.label}>Selecionar data</Text>
      <Pressable style={styles.dateInput} onPress={() => alert("Selecione a data")}>
        <Text style={styles.dateText}>{selectedDate}</Text>
        <AntDesign name="calendar" size={20} color="black" />
      </Pressable>

      <View style={styles.tabelaContainer}>
        <Text style={styles.tabelaHeader}>Horários disponíveis</Text>
        <FlatList
          data={horariosDisponiveis}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.consultaItem}>
              <AntDesign name="staro" size={20} color="black" />
              <View style={styles.consultaInfo}>
                <Text style={styles.consultaDescricao}>{item.descricao}</Text>
                <Text style={styles.consultaHorario}>{item.horario}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <View style={styles.footer}>
        <Pressable style={styles.cancelarButton} onPress={() => router.push("menuprincipal")}>
          <Text style={styles.footerButtonText}>Cancelar</Text>
        </Pressable>
        <Pressable style={styles.confirmarButton} onPress={() => alert("Consulta marcada!")}>
          <Text style={[styles.footerButtonText, { color: "#fff" }]}>Confirmar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    width: "100%",
    textAlign: "left",
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  dateInput: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  tabelaContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  tabelaHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  consultaItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  consultaInfo: {
    marginLeft: 15,
  },
  consultaDescricao: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  consultaHorario: {
    fontSize: 14,
    color: "#777",
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  cancelarButton: {
    width: "45%",
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  confirmarButton: {
    width: "45%",
    backgroundColor: "#000",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  footerButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});