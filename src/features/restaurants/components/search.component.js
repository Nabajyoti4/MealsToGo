import React, { useContext, useEffect } from "react";

import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const locationContext = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = React.useState(locationContext.keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="What you are carving for 😋 ?"
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        value={searchQuery}
        onSubmitEditing={() => locationContext.search(searchQuery)}
        onChangeText={(text) => {
          setSearchQuery(text);
        }}
      />
    </SearchContainer>
  );
};
