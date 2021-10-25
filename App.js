import React, { Component } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text } from "./src/components/typography/text.component";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import { Ionicons } from "@expo/vector-icons";

import { SafeArea } from "./src/components/utility/space-area.component";

//context
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//fonts
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

//screens
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";

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
const Maps = () => (
  <SafeArea>
    <Text>Maps</Text>
  </SafeArea>
);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
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
                name="Restaurants"
                component={RestaurantScreen}
              ></Tab.Screen>
              <Tab.Screen name="Maps" component={Maps}></Tab.Screen>
              <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto"></ExpoStatusBar>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
