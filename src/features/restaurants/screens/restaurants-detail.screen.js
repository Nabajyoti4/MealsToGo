import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfo } from "../components/restaurants-info-card.component";

import { SafeArea } from "../../../components/utility/space-area.component";

export const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant}></RestaurantInfo>
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          id="1"
          left={(props) => (
            <List.Icon {...props} icon="bread-slice"></List.Icon>
          )}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Item 1" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          id="2"
          left={(props) => <List.Icon {...props} icon="hamburger"></List.Icon>}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Item 1" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          id="3"
          left={(props) => (
            <List.Icon {...props} icon="food-variant"></List.Icon>
          )}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Item 1" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          id="4"
          left={(props) => <List.Icon {...props} icon="cup"></List.Icon>}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Item 1" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
