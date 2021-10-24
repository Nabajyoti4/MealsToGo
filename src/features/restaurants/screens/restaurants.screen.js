import React from "react";

import { Searchbar } from "react-native-paper";
import { StatusBar, FlatList, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/space-area.component";

//component
import { RestaurantInfo } from "../components/restaurants-info-card.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="What you are carving for 😋 ?"
          value={searchQuery}
        />
      </SearchContainer>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => <RestaurantInfo></RestaurantInfo>}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      ></FlatList>
    </SafeArea>
  );
};
