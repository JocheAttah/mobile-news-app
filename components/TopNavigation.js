import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const TopNavigation = ({ index, setIndex }) => {
  return (
    <View style={{ ...styles.container }}>
      <Header index={index} />
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  center: {
    fontWeight: "700",
  },
  left: {},
  text: {},
  right: {
    // width: 80,
    alignItems: "flex-end",
  },
});

const Header = ({ index, setIndex }) => {
  return (
    <>
      {index === 0 ? (
        <TouchableOpacity style={{ ...styles.left }}>
          <Feather name="sun" size={24} color="#fff" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={{ ...styles.left }}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
      )}

      <Text style={{ ...styles.center, color: "#fff", }}>
        {index ? "All News" : ""}
      </Text>

      {index === 0 ? (
        <View style={{ ...styles.right}}>
          <Text style={{ color: "#8A8B91" }}>All News</Text>
        </View>
      ) : (
        <TouchableOpacity style={{ ...styles.right }}>
          <Feather name="rotate-cw" size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </>
  );
};
