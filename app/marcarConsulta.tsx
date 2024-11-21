import React, { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function MarcarConsultas() {
  const [selectedDate, setSelectedDate] = useState("2024-11-21T00:00:00"); // Default date
  const [selectedEspecialidade, setSelectedEspecialidade] = useState(null);
  const [selectedHorario, setSelectedHorario] = useState(null);
  const [showEspecialidadesList, setShowEspecialidadesList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [especialidadesDisponiveis, setEspecialidadesDisponiveis] = useState([]);
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
  const [loadingHorarios, setLoadingHorarios] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const router = useRouter();

  // Função para buscar as especialidades
  const fetchEspecialidades = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://192.168.15.7:8080/especialidade/");
      const data = await response.json();
      setEspecialidadesDisponiveis(data);
    } catch (error) {
      console.error("Erro ao buscar especialidades:", error);
      alert("Erro ao carregar especialidades.");
    } finally {
      setLoading(false);
    }
  };

  // Função para buscar os horários disponíveis
// Função para buscar os horários disponíveis
const fetchHorariosDisponiveis = async () => {
  if (!selectedEspecialidade || !selectedDate) return;

  setLoadingHorarios(true);
  try {
    // Alterando para usar GET ao invés de POST
    const date = new Date(selectedDate);
if (isNaN(date.getTime())) {
  console.error("Data inválida:", selectedDate);
} else {
  const formattedDate = date.toISOString().slice(0, 19); // Remove o 'Z' do final
  console.log("Data formatada:", formattedDate);
  // Agora envie o formato para o backend
  const url = `http://192.168.15.7:8080/horario/horariosDisponiveis?idEspecialidade=${selectedEspecialidade}&data=${encodeURIComponent(formattedDate)}`;
  fetch(url);
}




    const response = await fetch(url, {
      method: "GET", // Alterado para GET
    });
    const data = await response.json();

    if (Array.isArray(data)) {
      const dadosFormatados = data.map((horario) => ({
        id: horario.id,
        horario: new Date(horario.horario).toLocaleString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        dataHora: new Date(horario.horario).toISOString(), // Armazenando no formato localDateTime
      }));
      setHorariosDisponiveis(dadosFormatados);
    } else {
      console.error("A resposta da API não é um array:", data);
      alert("Erro: A resposta da API está em um formato inválido.");
    }
  } catch (error) {
    console.error("Erro ao buscar horários:", error);
    alert("Erro ao carregar horários.");
  } finally {
    setLoadingHorarios(false);
  }
};


  useEffect(() => {
    fetchEspecialidades();
  }, []);

  useEffect(() => {
    if (selectedEspecialidade && selectedDate) {
      fetchHorariosDisponiveis();
    }
  }, [selectedEspecialidade, selectedDate]);

  const renderEspecialidade = ({ item }) => (
    <TouchableOpacity
      style={styles.especialidadeItem}
      onPress={() => {
        setSelectedEspecialidade(item.idEspecialidade);
        setShowEspecialidadesList(false);
      }}
    >
      <Text style={styles.especialidadeText}>{item.nome}</Text>
    </TouchableOpacity>
  );

  // Função para selecionar um horário
  const handleSelectHorario = (horario) => {
    setSelectedHorario(horario);
  };

  // Função para enviar a requisição POST
  const confirmarConsulta = async () => {
    if (!selectedEspecialidade || !selectedDate || !selectedHorario) {
      alert("Por favor, selecione todos os campos!");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://192.168.15.7:8080/consulta/createConsulta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          especialidadeId: selectedEspecialidade,
          dataHora: selectedHorario.dataHora, // Enviar a data e hora no formato localDateTime
        }),
      });

      if (response.ok) {
        alert("Consulta marcada com sucesso!");
        router.push("menuprincipal");
      } else {
        const errorData = await response.json();
        alert("Erro ao marcar consulta: " + errorData.message);
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
      alert("Erro ao marcar consulta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Marcar Consultas</Text>

      <Text style={styles.label}>Procurar Especialidades</Text>
      <Pressable
        style={styles.input}
        onPress={() => setShowEspecialidadesList((prev) => !prev)}
      >
        <Text style={{ color: selectedEspecialidade ? "#333" : "#aaa" }}>
          {selectedEspecialidade ? `Especialidade ${selectedEspecialidade}` : "Selecionar especialidade"}
        </Text>
        <AntDesign name={showEspecialidadesList ? "up" : "down"} size={16} color="#333" />
      </Pressable>

      {showEspecialidadesList && (
        <View style={styles.especialidadeListContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#007BFF" />
          ) : (
            <FlatList
              data={especialidadesDisponiveis}
              renderItem={renderEspecialidade}
              keyExtractor={(item) => item.idEspecialidade ? item.idEspecialidade.toString() : Math.random().toString()}
            />
          )}
        </View>
      )}

      <Text style={styles.label}>Selecionar data</Text>
      <Pressable
        style={styles.dateInput}
        onPress={() => setIsDatePickerVisible(true)}
      >
        <Text style={styles.dateText}>{new Date(selectedDate).toLocaleDateString("pt-BR")}</Text>
        <AntDesign name="calendar" size={20} color="black" />
      </Pressable>

      {isDatePickerVisible && (
        <DateTimePicker
          value={new Date(selectedDate)}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setIsDatePickerVisible(false);
            if (date) {
              setSelectedDate(date.toISOString());
            }
          }}
        />
      )}

      <View style={styles.tabelaContainer}>
        <Text style={styles.tabelaHeader}>Horários disponíveis</Text>
        {loadingHorarios ? (
          <ActivityIndicator size="large" color="#007BFF" />
        ) : (
          <FlatList
            data={horariosDisponiveis}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.consultaItem, item === selectedHorario ? styles.selectedHorario : null]}
                onPress={() => handleSelectHorario(item)}
              >
                <Text style={styles.consultaText}>{item.horario}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>

      <View style={styles.footer}>
        <Pressable style={styles.cancelarButton} onPress={() => router.push("menuprincipal")}>
          <Text style={styles.footerButtonText}>Cancelar</Text>
        </Pressable>
        <Pressable style={styles.confirmarButton} onPress={confirmarConsulta}>
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
    paddingHorizontal: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  especialidadeListContainer: {
    width: "100%",
    maxHeight: 150,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  especialidadeItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  especialidadeText: {
    fontSize: 16,
    color: "#333",
  },
  dateInput: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  tabelaContainer: {
    width: "100%",
    marginBottom: 20,
  },
  tabelaHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  consultaItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 5,
    backgroundColor: "#fff",
  },
  selectedHorario: {
    backgroundColor: "#007BFF",
  },
  consultaText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
  },
  footerButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007BFF",
  },
  cancelarButton: {
    width: "45%",
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 10,
    alignItems: "center",
  },
  confirmarButton: {
    width: "45%",
    paddingVertical: 12,
    backgroundColor: "#007BFF",
    borderRadius: 10,
    alignItems: "center",
  },
});
