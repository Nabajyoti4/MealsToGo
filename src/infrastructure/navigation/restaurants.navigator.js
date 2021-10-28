import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetail } from "../../features/restaurants/screens/restaurants-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="Restaurant"
        component={RestaurantScreen}
      ></RestaurantStack.Screen>
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      ></RestaurantStack.Screen>
    </RestaurantStack.Navigator>
  );
};
