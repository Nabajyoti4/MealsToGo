import React, { useContext, useEffect } from "react";

import { Searchbar } from "react-native-paper";
import { StatusBar, FlatList, SafeAreaView, View } from "react-native";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const locationContext = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = React.useState(locationContext.keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="What you are carving for 😋 ?"
        value={searchQuery}
        onSubmitEditing={() => locationContext.search(searchQuery)}
        onChangeText={(text) => {
          setSearchQuery(text);
        }}
      />
    </SearchContainer>
  );
};
