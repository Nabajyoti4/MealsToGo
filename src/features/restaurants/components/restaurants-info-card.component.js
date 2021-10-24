import React from "react";
import { Image, View } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
} from "./restaurants-info-card.style";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some restaturant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU",
    ],
    address = "Rowriah nefa tini ali, Jorhat",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((_, index) => (
                <SvgXml key={index} xml={star} width={20} height={20}></SvgXml>
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}

              <Spacer position="left" size="large"></Spacer>
              {isOpenNow && <SvgXml xml={open} width={20} height={20}></SvgXml>}
              <Spacer position="left" size="large"></Spacer>
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </SectionEnd>
          </Section>

          <Text>{address}</Text>
        </Info>
      </RestaurantCard>
    </View>
  );
};
