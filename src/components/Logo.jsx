import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <Image //en html: <img
      source={require("../../assets/coca-cola.png")}//en html: src, pone dos veces ../ porque tiene que salir de components y de src para luego entrar en assets
      style={styles.logo}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 120,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 30,
  },
});