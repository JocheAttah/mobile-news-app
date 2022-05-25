import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SingleNews = ({ item, index }) => {
  return (
    <View>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

export default SingleNews;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
    color: "white",
  },
});
