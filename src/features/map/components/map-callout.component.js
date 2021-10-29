import React from "react";
import styled from "styled-components";

import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.js";

const MyText = styled.Text``;

export const MapCallout = ({ restaurant }) => {
  return (
    <CompactRestaurantInfo restaurant={restaurant}></CompactRestaurantInfo>
  );
};
