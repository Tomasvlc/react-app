import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import DepotScreen from "../screens/DepotScreen";
import TransactionsScreen from "../screens/TransactionsScreen";
import ImpactScreen from "../screens/ImpactScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import {
  BottomTabParamList,
  DepotParamList,
  TransactionsParamList,
  WelcomeParamList,
  ImpactParamList,
  TabOneParamList,
  TabTwoParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function NavBarNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Depot"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Depot"
        component={DepotNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Transactions"
        component={TransactionsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Impact"
        component={ImpactNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Welcome"
        component={WelcomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>

    /*<BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          )
        }}
      />
    </BottomTab.Navigator>*/
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}

const DepotStack = createStackNavigator<DepotParamList>();

function DepotNavigator() {
  return (
    <DepotStack.Navigator>
      <DepotStack.Screen
        name="DepotScreen"
        component={DepotScreen}
        options={{ headerTitle: "DEPÔT" }}
      />
    </DepotStack.Navigator>
  );
}

const TransactionsStack = createStackNavigator<TransactionsParamList>();

function TransactionsNavigator() {
  return (
    <TransactionsStack.Navigator>
      <TransactionsStack.Screen
        name="TransactionsScreen"
        component={TransactionsScreen}
        options={{ headerTitle: "MES TRANSACTIONS" }}
      />
    </TransactionsStack.Navigator>
  );
}

const ImpactStack = createStackNavigator<ImpactParamList>();

function ImpactNavigator() {
  return (
    <TransactionsStack.Navigator>
      <TransactionsStack.Screen
        name="TransactionsScreen"
        component={ImpactScreen}
        options={{ headerTitle: "MON IMPACT" }}
      />
    </TransactionsStack.Navigator>
  );
}

const WelcomeStack = createStackNavigator<WelcomeParamList>();

function WelcomeNavigator() {
  return (
    <WelcomeStack.Navigator>
      <WelcomeStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerTitle: "" }}
      />
    </WelcomeStack.Navigator>
  );
}
