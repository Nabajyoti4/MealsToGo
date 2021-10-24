import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some restaturant",
    icon,
    photos = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU",
    ],
    address = "Rowriah nefa tini ali, Jorhat",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{ uri: photos[0] }}
        />
        <Text style={styles.title}>{name}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});
