import React from "react";
import { StyleSheet, View } from "react-native";

const Card = props => {
  const { children, style } = props;
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
  }
});

export default Card;
