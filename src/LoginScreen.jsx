import React, { useState } from "react";
import { View,  Text,  Alert,  StyleSheet} from "react-native";

import Header from "./components/Header";
import CuadroDeTexto from "./components/CuadroDeTexto";
import BotonIngreso from "./components/BotonIngreso";

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
    <View style={styles.container}>
      <Header />

      <View style={styles.formulario}>
        <CuadroDeTexto
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
        />

        <CuadroDeTexto
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <BotonIngreso
          texto="INGRESAR"
          onPress={handleLogin}
        />

        <Text style={styles.link}>
          Olvidaste la clave?
        </Text>

        <Text style={styles.link}>
          Crear Cuenta
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECECEC",
  },

  formulario: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  link: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 10,
  },
});