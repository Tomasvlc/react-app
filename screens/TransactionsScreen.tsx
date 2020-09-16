import * as React from "react";
import { StyleSheet, Image, Platform, FlatList } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TransactionsScreen() {
  return (
    <View>
      <View style={styles.containerTop}>
        <Image source={require("../assets/images/operation.png")}></Image>
        <Text style={styles.containerTextTop}>Dernières opérations</Text>
      </View>
      <View style={styles.containerBottom}>
        <FlatList
          data={[
            {
              id: 0,
              day: "10",
              month: "mars",
              hour: "11:45",
              action: "Dépôt 2 emballages",
              price: 6,
            },
            {
              id: 1,
              day: "10",
              month: "mars",
              hour: "11:30",
              action: "2 € gagnés",
              price: 2,
            },
            {
              id: 2,
              day: "10",
              month: "mars",
              hour: "11:45",
              action: "Dépôt 2 emballages",
              price: 4,
            },
          ]}
          renderItem={({ item }) => (
            <View style={styles.containerListItem}>
              <Text style={styles.listItemDate}>
                <Text style={styles.listItemDay}>{item.day}</Text>
                <Text style={styles.ListItemMonth}>{item.month}</Text>

                {item.hour}
              </Text>
              <Text style={styles.listItemText}>{item.action}</Text>
              <Text style={styles.listItemPrice}>
                {" + "}
                {item.price}
                {" €"}
              </Text>
            </View>
          )}
        />
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
    height: 191,
    backgroundColor: "#004FFE",
    justifyContent: "center",
    alignItems: "center",
  },
  containerImage: {
    textAlign: "center",
  },
  containerBottom: {
    height: "100%",
    backgroundColor: "#D4FFEB",
  },
  containerTextTop: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 60,
    marginTop: 10,
  },
  containerText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  containerListItem: {
    backgroundColor: "transparent",
    borderBottomWidth: 0.5,
    borderBottomColor: "#004FFE",
    position: "relative",
  },
  listItemDate: {
    color: "#004FFE",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 40,
  },
  listItemDay: {
    fontWeight: "bold",
    color: "#004FFE",
  },
  ListItemMonth: {
    fontSize: 17,
    color: "#004FFE",
  },
  listItemText: {
    color: "#004FFE",
    fontSize: 15,
    marginLeft: 40,
    marginBottom: 15,
  },
  listItemPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#004FFE",
    backgroundColor: "#95FFCD",
    display: "flex",
    width: 60,
    height: 30,
    paddingRight: 6,
    borderRadius: 25,
    position: "absolute",
    right: 40,
    marginTop: 22,
  },
});
