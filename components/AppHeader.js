import { StyleSheet, useWindowDimensions } from "react-native";
import React, { useContext } from "react";
import { TabView, SceneMap } from "react-native-tab-view";
import DiscoverScreen from "../screens/DiscoverScreen";
import NewsScreen from "../screens/NewsScreen";
import TopNavigation from "../components/TopNavigation";
import { NewsContext } from "../api/Context";

const AppHeader = () => {
  const layout = useWindowDimensions();

  const { index, setIndex } = useContext(NewsContext);
  const [routes] = React.useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "All News" },
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
};

export default AppHeader;

const styles = StyleSheet.create({});
