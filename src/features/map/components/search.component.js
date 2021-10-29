import React, { useContext, useEffect } from "react";

import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 30px;
  width: 100%;
`;

export const Search = () => {
  const locationContext = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = React.useState(locationContext.keyword);

  useEffect(() => {
    setSearchQuery(locationContext.keyword);
  }, [locationContext.keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Where to search for ?"
        icon="map"
        value={searchQuery}
        onSubmitEditing={() => locationContext.search(searchQuery)}
        onChangeText={(text) => {
          setSearchQuery(text);
        }}
      />
    </SearchContainer>
  );
};
