import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function CuadroDeTexto({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 55,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#6C3CF0",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
});