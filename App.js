import { StyleSheet, View, StatusBar, Platform } from "react-native";
import Context from "./api/Context";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: "#151923" }}>
      <AppHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
