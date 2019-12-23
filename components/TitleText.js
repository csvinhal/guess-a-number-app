import React from "react";
import { StyleSheet, Text } from "react-native";

const TitleText = props => {
  const { children, style } = props;
  return <Text style={{ ...styles.title, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans",
    fontSize: 18
  }
});

export default TitleText;
