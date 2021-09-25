import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import Card from "../components/card";

function Home({ image, title, author, readtime, navigation, text }) {
  const blogPost = [
    {
      image: require("../assets/image1.jpg"),
      title: `5 Ways To Increase Your ${"\n"}Capability as a Software ${"\n"}Engineer`,
      author: "Rafique Adam Cudjoe",
      readtime: "4 mins read",
      text: `The role of a software engineer is to solve complex problems. Ideally, SEs discover and analyze requirements and employ best practices, design patterns, code, runtimes, frameworks, APIs, and libraries to deliver simplified yet comprehensive solutions while reducing the potential for future challenges.
      Sofware engineering as a discipline requires strong critical thinking, attention to detail, coding proficiency, and discipline to maintain a constant learning rate.
      Knowledge and experience distinguish SEs, yet the constituting number of roles or projects often varies. Improving as an SE requires expanding both of these areas.Here I’ve included several practices and areas I’ve found to be highly effective for immediate improvement, respectively.
      `,
      id: "1",
    },
    {
      image: require("../assets/image2.jpg"),
      title: `No Matter Where You Are${"\n"}You Can Always Grow as${"\n"}a Developer`,
      author: "Rafique Adam Cudjoe",
      readtime: "5 mins read",
      id: "2",
    },
    {
      image: require("../assets/image3.jpeg"),
      title: `14 Best Web Developer${"\n"}Portfolios To Get Inspiration`,
      author: "Rafique Adam Cudjoe",
      readtime: "6 mins read",
      id: "3",
    },
    {
      image: require("../assets/image4.jpg"),
      title: `How To Use Selenium To${"\n"}Automate Any Website`,
      author: "Rafique Adam Cudjoe",
      readtime: "7 mins read",
      id: "4",
    },
    {
      image: require("../assets/image5.jpg"),
      title: `Rethinking the 80/20 Rule in${"\n"}Software Development`,
      author: "Rafique Adam Cudjoe",
      readtime: "8 mins read",
      id: "5",
    },
  ];

  return (
    <View style={styles.main}>
      <FlatList
        data={blogPost}
        renderItem={({ item }) => {
          return (
            <Card
              image={item.image}
              title={item.title}
              author={item.author}
              readtime={item.readtime}
              navigation={navigation}
              text={item.text}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
    marginHorizontal: 20,
  },

  headingtext: {
    fontSize: 25,
  },
  icon: {
    marginTop: 10,
  },
});

export default Home;
