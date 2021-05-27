import React from "react";
import { View } from "react-native";
import IconButton from "../components/IconButton";
import { storiesOf } from "@storybook/react-native";

storiesOf("IconButton", module)
  .add("On", () => (
    <IconButton
      icon={"heart"}
      color={"#333"}
      onPress={() => console.log("un-favorited!")}
    />
  ))
  .add("Off", () => (
    <IconButton
      icon={"heart-o"}
      color={"#333"}
      onPress={() => console.log("favorited!")}
    />
  ));