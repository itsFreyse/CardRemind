import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const LogoSvg = () => (
  <Svg width={150} height={150} viewBox="0 0 100 100">
    <Circle cx="50" cy="50" r="45" stroke="#007AFF" strokeWidth="2.5" fill="none" />
    <Path
      d="M30 50 L45 65 L70 35"
      stroke="#007AFF"
      strokeWidth="3"
      fill="none"
    />
  </Svg>
);

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Datos falsos para prueba
    const fakeUser = {
      email: 'test@test.com',
      password: '123456'
    };

    if (email === fakeUser.email && password === fakeUser.password) {
      setError('');
      onLoginSuccess(); // Llamamos a la función que nos redirige
    } else {
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoSvg />
        <Text style={styles.title}>CardRemind</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
}); 