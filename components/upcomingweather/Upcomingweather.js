import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

const NextWeatherConditon = () => {
  return (
    <View>
      <View style={styles.nextWeatherItem}></View>
    </View>
  );
};

export default NextWeatherConditon;

const styles = StyleSheet.create({
  nextWeatherItem: {
    backgroundColor: "#D9D9D9",
    opacity: 0.5,
    borderRadius: 30,
    marginTop: 20,
    padding: 20,
    width: 156,
    height: 156,
  },
});
