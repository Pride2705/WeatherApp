import { Text, View, StyleSheet, ScrollView } from "react-native";
import React, { Component } from "react";
import NextWeatherConditon from "../upcomingweather/Upcomingweather";

const Mainweather = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.city}>Windhoek</Text>
          <Text style={styles.date}>12:30 am - Tuesday 28 June</Text>
        </View>
      </View>
      <View style={styles.weather}>
        <Text style={styles.weatherTemperature}>10°C</Text>
        <Text style={styles.weatherCondition}>
          <></>Cloudy
        </Text>
      </View>
      <View style={styles.line}></View>
      <ScrollView horizontal="true">
        <View style={styles.nextWeatherContainer}>
          <NextWeatherConditon />
          <NextWeatherConditon />
        </View>
      </ScrollView>
      <View style={styles.line}></View>
    </View>
  );
};

export default Mainweather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    marginLeft: 20,
  },
  city: {
    fontSize: 60,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
  },
  date: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingTop: 10,
    textAlign: "left",
  },
  weather: {
    marginTop: 100,
    textAlign: "left",
  },
  weatherCondition: {
    fontSize: 30,
    fontWeight: "600",
    color: "white",
  },
  weatherTemperature: {
    fontSize: 60,
    fontWeight: "200",
    color: "white",
  },
  line: {
    borderBottomColor: "white",
    marginTop: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 340,
  },
  nextWeatherContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
