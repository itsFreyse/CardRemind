import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home({ onLogout }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header con botón de logout */}
      <View style={styles.header}>
        <View style={styles.headerSpace} />
        <Text style={styles.headerText}>CardRemind</Text>
        <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
          <MaterialIcons name="logout" size={24} color="#FF3B30" />
        </TouchableOpacity>
      </View>

      {/* Contenido principal */}
      <View style={styles.content}>
        <View style={styles.mainCard}>
          <Text style={styles.welcomeText}>¡Bienvenido!</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => navigation.navigate('Tarjetas')}
          >
            <AntDesign name="plus" size={32} color="#007AFF" />
          </TouchableOpacity>
          <Text style={styles.instructionText}>
            Toca el botón para agregar una nueva tarjeta
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerSpace: {
    width: 24,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  mainCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#f0f8ff',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  instructionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
}); 