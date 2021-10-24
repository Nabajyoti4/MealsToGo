import React, { Component } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

//screens
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <React.Fragment>
      <RestaurantScreen></RestaurantScreen>
      <ExpoStatusBar style="auto"></ExpoStatusBar>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
