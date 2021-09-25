import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import {
  Ionicons,
  Feather,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import pic4 from "../assets/raf.jpg";

function BlogDetails({ route, text, readtime, author, image, title }) {
  console.log();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.bdetailsmain}
    >
      
      <View style={styles.detailscontent}>
        <Image style={styles.image} source={route.params.image} />
        <Text style={styles.bdtitle}>{route.params.title}</Text>
        <View style={styles.favitext}>
          <Image style={styles.favicon} source={pic4} />
          <Text style={styles.author}>{route.params.author}</Text>
          <Text style={styles.ico}></Text>
          <Text style={styles.timeread}>{route.params.readtime}</Text>
        </View>
        <View>
          <Text style={styles.maintext}>{route.params.text}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bdetailsmain: {
    marginHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headicons: {
    flexDirection: "row",
  },
  headtext: {
    flexDirection: "row",
  },
  htxt: {
    fontSize: 25,
  },
  hicon1: {
    marginHorizontal: 5,
  },
  image: {
    height: 300,
    width: 340,
    marginVertical: 30,
    alignSelf: "center",
  },
  maintext: {
    marginHorizontal: 20,
    fontSize: 20,
    lineHeight: 30,
    justifyContent:"center"
  },
  bdtitle: {
    fontSize: 30,
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  favicon: {
    height: 40,
    width: 40,
    borderRadius: 15,
  },
  favitext: {
    flexDirection: "row",
    marginVertical: 30,
    alignItems: "center",
    marginHorizontal: 20,
  },
  author: {
    marginHorizontal: 10,
    fontSize: 15,
  },
  timeread: {
    marginHorizontal: 5,
    color: "grey",
  },
  ico: {
    height: 5,
    width: 5,
    backgroundColor: "grey",
    borderRadius: 5,
  },
});

export default BlogDetails;
