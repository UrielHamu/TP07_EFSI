import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import Layout from "../components/Layout";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const usuarioValido = "hamuuriel@gmail.com";
    const passwordValida = "123456";

    if (
      email === usuarioValido &&
      password === passwordValida
    ) {
      Alert.alert(
        "Ingreso exitoso",
        "Bienvenido al sistema."
      );
    } else {
      Alert.alert(
        "Error",
        "Usuario o contraseña incorrectos, vuelva a intentar"
      );
    }
  };

  return (
    <Layout>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Login App (Apellido, Apellido)
        </Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>
            INGRESAR
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>
            Olvidaste la clave?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>
            Crear Cuenta
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6C3CF0",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  formContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  input: {
    height: 55,
    borderWidth: 1,
    borderColor: "#6C3CF0",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "white",
  },

  button: {
    backgroundColor: "#7D56F5",
    height: 55,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 20,
  },

  buttonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },

  link: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 10,
  },
});