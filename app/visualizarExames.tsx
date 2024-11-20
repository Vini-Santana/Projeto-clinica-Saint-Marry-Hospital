import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ViewAppointmentsPanel = () => {
  const appointments = [
    { id: '1', specialty: 'Ressonancia Magnética', time: '11:30', date: 'Nov 10, 2024' },
    { id: '2', specialty: 'Hemograma', time: '9:40', date: 'Jun 14, 2024' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Exames</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.appointmentCard}>
            <Text style={styles.specialty}>{item.specialty}</Text>
            <View style={styles.dateTimeContainer}>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.changeButton}>
                <Text style={styles.buttonText}>Alterar horário</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.newAppointmentButton}>
        <Text style={styles.newAppointmentText}>Marcar novo exame</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  appointmentCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
  },
  specialty: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  time: {
    fontSize: 14,
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  changeButton: {
    backgroundColor: '#000',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  newAppointmentButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  newAppointmentText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ViewAppointmentsPanel;