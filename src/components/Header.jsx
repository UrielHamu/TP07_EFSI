import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>
        Login App (Apellido, Apellido)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6C3CF0",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});