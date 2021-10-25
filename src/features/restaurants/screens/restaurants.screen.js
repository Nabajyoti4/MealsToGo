import React, { useContext } from "react";

import { Searchbar } from "react-native-paper";
import { StatusBar, FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/space-area.component";

//component
import { RestaurantInfo } from "../components/restaurants-info-card.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="What you are carving for 😋 ?"
          value={searchQuery}
        />
      </SearchContainer>
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
