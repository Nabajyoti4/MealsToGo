import React, { useContext } from "react";

import { StatusBar, FlatList, SafeAreaView, View } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utility/space-area.component";

//component
import { RestaurantInfo } from "../components/restaurants-info-card.component";
import { Search } from "../components/search.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";



export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <View style={{ position: "absolute", top: "50%", left: "50%" }}>
          <ActivityIndicator
            size={50}
            style={{ marginLeft: -25 }}
            animating={true}
            color={Colors.red800}
          />
        </View>
      )}
      <Search></Search>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantInfo restaurant={item}></RestaurantInfo>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      ></FlatList>
    </SafeArea>
  );
};
