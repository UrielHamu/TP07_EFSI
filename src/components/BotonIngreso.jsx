import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function BotonIngreso({
  texto,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.boton}
      onPress={onPress}
    >
      <Text style={styles.texto}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#7D56F5",
    height: 55,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 20,
  },

  texto: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "500",
  },
});