import React, { Component } from "react";
import { Text } from "../../components/typography/text.component";
import { Ionicons } from "@expo/vector-icons";

import { SafeArea } from "../../components/utility/space-area.component";

//navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

const TABS_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-settings",
  Settings: "md-map",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

export const AppNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Restaurants") {
              iconName = TABS_ICON.Restaurants;
            } else if (route.name === "Settings") {
              iconName = TABS_ICON.Settings;
            } else {
              iconName = TABS_ICON.Map;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name="Restaurants"
          component={RestaurantsNavigator}
        ></Tab.Screen>
        <Tab.Screen
          options={{ headerShown: false }}
          name="Maps"
          component={MapScreen}
        ></Tab.Screen>
        <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
      </Tab.Navigator>
  );
};
