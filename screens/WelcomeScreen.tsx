import * as React from "react";
import { StyleSheet, Image, Platform, FlatList } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function WelcomeScreen() {
  return (
    <View>
      <View style={styles.containerHeader}>
        <Text style={styles.containerHeaderText}>BIENVENUE !</Text>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.centerIcon}>
          <View style={styles.containerHeaderIcon}>
            <Image
              style={styles.centerIcon}
              source={require("../assets/images/la_consigne.png")}
            ></Image>
          </View>
        </View>
        <View style={styles.containerBottom}>
          <View style={styles.containerTopText}>
            <Text style={styles.topText}>COMMENT RENDRE MON EMBALLAGE ?</Text>
          </View>
          <View style={styles.containerTopIcons}>
            <View style={styles.containerTopIconLeft}>
              <Image source={require("../assets/images/collector.png")}></Image>
              <Image
                style={styles.numberIconLeft}
                source={require("../assets/images/icon_1.png")}
              ></Image>
              <View style={styles.textIconLeft}>
                <Text style={styles.textIcon}>Présentez vous devant</Text>
                <Text>
                  <Text style={styles.textIcon}>un </Text>
                  <Text style={styles.textIconBold}>collecteur </Text>
                  <Text style={styles.textIcon}>GreenGo</Text>
                </Text>
              </View>
            </View>
            <View style={styles.containerTopIconRight}>
              <Image
                source={require("../assets/images/scan_container.png")}
              ></Image>
              <Image
                style={styles.numberIconRight}
                source={require("../assets/images/icon_2.png")}
              ></Image>
              <View style={styles.textIconRight}>
                <Text>
                  <Text style={styles.textIcon}>Scannez le </Text>
                  <Text style={styles.textIconBold}>QR code </Text>
                </Text>
                <Text style={styles.textIcon}>présent sur l'emballage</Text>
                <Text style={styles.textIcon}>puis déposer-le</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerBottomIcon}>
            <Image source={require("../assets/images/smartphone.png")}></Image>
            <Image
              style={styles.numberIconBottom}
              source={require("../assets/images/icon_3.png")}
            ></Image>
            <View style={styles.textIconBottom}>
              <Text>
                <Text style={styles.textIcon}>Scannez </Text>
                <Text style={styles.textIconBold}>votre identifiant</Text>
                <Text style={styles.textIcon}>qui s'affiche sur la</Text>
              </Text>
              <Text style={styles.textIcon}>
                page suivante pour récupérer votre consigne
              </Text>
            </View>
          </View>
          <View style={styles.containerButton}>
            <View style={styles.button}>
              <Text style={styles.textButton}>Afficher mon identifiant</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    backgroundColor: "#004FFE",
    top: 0,
  },
  containerHeaderText: {
    color: "#D4FFEB",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -42,
  },
  containerHeaderIcon: {
    position: "relative",
    backgroundColor: "transparent",
    top: -50,
  },
  centerIcon: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  containerBottom: {
    backgroundColor: "#D4FFEB",
  },
  containerTopText: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    top: -40,
  },
  topText: {
    color: "#0257FD",
    fontSize: 16,
    fontWeight: "bold",
  },
  containerTopIcons: {
    backgroundColor: "#D4FFEB",
    paddingBottom: 20,
  },
  containerTopIconLeft: {
    backgroundColor: "transparent",
    left: 70,
    top: -15,
  },
  numberIconLeft: {
    position: "absolute",
    top: 95,
    left: 27,
  },
  textIconLeft: {
    backgroundColor: "transparent",
    alignItems: "center",
    left: -160,
    top: 20,
  },
  numberIconRight: {
    position: "absolute",
    top: 40,
    left: 45,
  },
  textIconRight: {
    backgroundColor: "transparent",
    alignItems: "center",
    top: 34,
    right: 30,
    marginBottom: 30,
  },
  containerTopIconRight: {
    backgroundColor: "transparent",
    position: "absolute",
    right: 1,
    top: 25,
  },
  textIcon: {
    fontSize: 14,
    color: "#004FFE",
    lineHeight: 15,
  },
  textIconBold: {
    fontSize: 14,
    color: "#004FFE",
    fontWeight: "bold",
  },
  containerBottomIcon: {
    backgroundColor: "#D4FFEB",
    position: "relative",
    alignItems: "center",
    height: 170,
  },
  containerPhoneIcon: {
    marginTop: 30,
    position: "absolute",
    backgroundColor: "transparent",
  },
  numberIconBottom: {
    position: "absolute",
    top: 65,
    right: 132,
  },
  textIconBottom: {
    backgroundColor: "transparent",
    top: 25,
    alignItems: "center",
  },
  containerButton: {
    alignItems: "center",
    backgroundColor: "#D4FFEB",
    height: 100,
  },
  button: {
    backgroundColor: "#fff",
    width: 220,
    height: 42,
    borderColor: "#FF9CFF",
    borderWidth: 4,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 16,
    color: "#004FFE",
    fontWeight: "bold",
  },
});
