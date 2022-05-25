import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { NewsContext } from "../api/Context";
import Carousel from "react-native-snap-carousel";
import SingleNews from "../components/SingleNews";

const NewsScreen = () => {
  const { news } = useContext(NewsContext);
  const [activeIndex, setActiveIndex] = useState();

  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.carousel}>
      {news.articles && (
        <Carousel
          layout={"stack"}
          data={news.articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => {
            console.log(item);
            return <SingleNews item={item} index={index} />;
          }}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    // transform: [{ scaleY: -1 }],
    backgroundColor: "black",
  },
});
