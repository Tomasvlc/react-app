import * as React from "react";
import { StyleSheet, Image, Platform } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Barcode from "react-native-barcode-builder";
import { ART } from "react-native";

export default function TabOneScreen() {
  return (
    <View>
      <View style={styles.containerTop}>
        <Barcode value="Hello world" format="CODE128" />
      </View>
      <View style={styles.containerBottom}>
        <Text style={styles.containerTextBold}>Scannez</Text>
        <Text style={styles.containerTextBold}>votre identifiant</Text>
        <Text style={styles.containerText}>sur le collecteur</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    //backgroundColor: "transaparent",
    top: 0,
  },
  containerTop: {
    height: "50%",
    backgroundColor: "#dcfcec",
    justifyContent: "center",
    alignItems: "center",
  },
  containerImage: {
    textAlign: "center",
  },
  containerBottom: {
    height: "50%",
    backgroundColor: "#1e59f4",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  containerTextBold: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  containerText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
});
