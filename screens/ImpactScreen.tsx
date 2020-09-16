import * as React from "react";
import { StyleSheet, Image, Platform, ScrollView } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Barcode from "react-native-barcode-builder";
import { ART } from "react-native";

var myNumbers = [
  {
    id: 0,
    name: "emballages",
    number: 15,
  },
  {
    id: 1,
    name: "emballages-year",
    number: 35,
  },
];

var numberOfComunity = [
  {
      id: 0,
    name: "users",
    number: 50000,
  },
  {
    id: 1,
    name: "emballage-avoided",
    number: 1000000,
  },
  {
    id: 2,
    name: "weight",
    number: 20,
  },
  {
    id: 3,
    name: "trash",
    number: 300000,
  },
];

export default function ImpactScreen() {
  return (
    <ScrollView>
      <View style={styles.containerTop}>
        <View style={styles.containerTopContent}>
          <Image source={require("../assets/images/follow_me.png")}></Image>
          <Text style={styles.topTitle}>L'INFLUENCEUR</Text>
        </View>
      </View>
      <View style={styles.centerCircle}>
        <View style={styles.containerCircle}>
          <View style={styles.circle}>
            <Text style={styles.weightCircle}>-{myNumbers.[0].number}</Text>
            <Text style={styles.textCircle}>EMBALLAGES</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerMiddle}>
        <Text style={styles.containerMiddleTitle}>Félicitations !</Text>
        <Text style={styles.containerMiddleText}>A ce rythme</Text>
        <Text style={styles.containerMiddleTextBold}>-{myNumbers[1].number} emballages</Text>
        <Text style={styles.containerMiddleText}>d'ici fin 2020</Text>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.containerBottomText}>
          <Text style={styles.textBottom}>L'impact de la communauté</Text>
          <Text style={styles.textBottomBold}>des Consigneurs</Text>
        </View>
        <View style={styles.containerBottomIconsTop}>
          <View style={[styles.userIcon, styles.containerBottomIconsLeft]}>
            <Image source={require("../assets/images/users.png")}></Image>
            <Text style={[styles.iconUserTextMarge ,styles.iconsNumbers]}>{numberOfComunity.[0].number}</Text>
            <Text style={styles.textBottom}>Utilisateurs</Text>
          </View>
          <View style={styles.containerBottomIconsRight}>
            <Image source={require("../assets/images/container.png")}></Image>
            <Text style={[styles.iconTextMarge ,styles.iconsNumbers]}>{numberOfComunity.[1].number}</Text>
            <Text style={[styles.textBottom, styles.centerText]}>
              d'emballages jettables évités
            </Text>
          </View>
        </View>
        <View style={styles.containerBottomIconsBottom}>
          <View style={[styles.weightIcon, styles.containerBottomIconsLeft]}>
            <Image source={require("../assets/images/weight.png")}></Image>
            <Text style={[styles.iconTextMarge ,styles.iconsNumbers]}>{numberOfComunity.[2].number} Tonnes</Text>
            <Text style={styles.textBottom}>de déchets évités</Text>
          </View>
          <View style={styles.containerBottomIconsRight}>
            <Image source={require("../assets/images/trash_can.png")}></Image>
            <Text style={[styles.iconTextMarge ,styles.iconsNumbers]}>{numberOfComunity.[3].number}</Text>
            <Text style={styles.textBottom}>Pouvelles en moins</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerTop: {
    alignItems: "center",
    justifyContent: "center",
    height: 280,
    backgroundColor: "#D4FFEB",
    position: "relative",
  },
  topTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#004FFE",
    marginTop: 10,
  },
  containerTopContent: {
    marginTop: -60,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  centerCircle: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerCircle: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 200,
  },
  circle: {
    height: 159,
    width: 157,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 7,
    borderColor: "#FF9CFF",
    borderRadius: 90,
  },
  weightCircle: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#0257FD",
  },
  textCircle: {
    color: "#0257FD",
    fontSize: 12,
    fontWeight: "bold",
  },
  containerMiddle: {
    backgroundColor: "#0257FD",
    height: 293,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  containerMiddleTitle: {
    color: "#fff",
    fontSize: 29,
    fontWeight: "bold",
    marginBottom: 35,
  },
  containerMiddleText: {
    color: "#fff",
    fontSize: 21,
  },
  containerMiddleTextBold: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "bold",
  },
  containerBottom: {
    backgroundColor: "#D4FFEB",
  },
  containerBottomText: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 60,
  },
  textBottom: {
    color: "#004FFE",
    fontSize: 16,
  },
  textBottomBold: {
    color: "#004FFE",
    fontSize: 16,
    fontWeight: "bold",
  },
  containerBottomIconsTop: {
    marginTop: 30,
    backgroundColor: "#D4FFEB",
    marginBottom: 50,
  },
  containerBottomIconsBottom: {
    marginTop: 20,
    backgroundColor: "#D4FFEB",
    marginBottom: 40,
  },
  containerBottomIconsLeft: {
    backgroundColor: "transparent",
    width: 148,
    marginLeft: 35,
    alignItems: "center",
  },
  containerBottomIconsRight: {
    backgroundColor: "transparent",
    position: "absolute",
    width: 148,
    right: 35,
    alignItems: "center",
  },
  iconsNumbers: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#004FFE",
  },
  centerText: {
    textAlign: "center",
  },
  userIcon: {
    marginTop: -9,
  },
  weightIcon: {
    marginTop: 9,
  },
  iconTextMarge: {
      marginTop: 20,
  },
  iconUserTextMarge: {
      marginTop: 10,
  }
});
