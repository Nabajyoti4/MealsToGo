import { Searchbar } from "react-native-paper";
import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";

export default function App() {

   const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <React.Fragment>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{ padding: 16 }}>
          <Searchbar
            placeholder="Search"
            value={searchQuery}
          />
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto"></StatusBar>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
