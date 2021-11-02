import React, { useState, useContext } from "react";

import { FlatList, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utility/space-area.component";

//component
import { RestaurantInfo } from "../components/restaurants-info-card.component";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favorites.context";

export const RestaurantScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const [isTogggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);

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
      <Search
        isFavouritesToggled={isTogggled}
        onFavouritesToggle={() => setIsToggled(!isTogggled)}
      ></Search>
      {isTogggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        ></FavouritesBar>
      )}
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <RestaurantInfo restaurant={item}></RestaurantInfo>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      ></FlatList>
    </SafeArea>
  );
};
