import React, { useState } from "react";
import { View,  Text,  Alert,  StyleSheet, Image} from "react-native";

import Header from "./components/Header";
import CuadroDeTexto from "./components/CuadroDeTexto";
import Logo from "./components/Logo";
import BotonIngreso from "./components/BotonIngreso";
import Layout from "./components/Layout";


export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const usuarioValido = "hamuuriel@gmail.com"; //usuario hardcodeado
    const passwordValida = "123456";//contraseña hardcodeada

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
      <Header />
      <Logo />
      <Image //en html: <img
        source={require("../assets/coca-cola.png")}//en html: src
        style={styles.logo}
      />

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
          secureTextEntry={true}//que no se vea lo que escribe por seguridad
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
    </Layout>
  );
}

const styles = StyleSheet.create({
  formulario: {
    flex: 1,
    paddingHorizontal: 25,
    marginTop: 20,
  },

  link: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 10,
  },
});