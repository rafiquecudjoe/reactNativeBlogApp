import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import {
  Ionicons,
  Feather,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import pic4 from "../assets/raf.jpg";

function BlogDetails({text,readtime,author,image,title}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.bdetailsmain}
    >
      <View style={styles.header}>
        <View style={styles.headtext}>
          <Ionicons name="chevron-back" size={32} color="black" />
          <Text style={styles.htxt}>Programming</Text>
        </View>

        <View style={styles.headicons}>
          <MaterialIcons
            style={styles.hicon1}
            name="headset"
            size={32}
            color="black"
          />
          <Feather style={styles.hicon1} name="heart" size={32} color="black" />
          <AntDesign
            style={styles.hicon1}
            name="sharealt"
            size={32}
            color="black"
          />
        </View>
      </View>
      <View style={styles.detailscontent}>
        <Image style={styles.image} source={image} />
        <Text style={styles.bdtitle}>
         {title}
        </Text>
        <View style={styles.favitext}>
          <Image style={styles.favicon} source={pic4} />
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.ico}></Text>
          <Text style={styles.timeread}>{readtime}</Text>
        </View>
        <View>
          <Text style={styles.maintext}>
         {text}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bdetailsmain: {
    marginTop: 70,
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
