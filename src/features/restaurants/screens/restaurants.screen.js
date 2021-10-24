import React from "react";

import { Searchbar } from "react-native-paper";
import { StatusBar, Text, View, SafeAreaView } from "react-native";

//component
import { RestaurantInfo } from "../components/restaurants-info-card.component";

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={{ padding: 16 }}>
        <Searchbar placeholder="Search" value={searchQuery} />
      </View>
      <RestaurantInfo></RestaurantInfo>
    </SafeAreaView>
  );
};
