import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import pic2 from "../assets/raf.jpg";

function Card({ image, author, title, readtime, navigation,text }) {
  

    return (
      <TouchableOpacity onPress={()=>navigation.push('blogDetails',{author:author,readtime:readtime,title:title,image:image,text:text})}>
    <View style={styles.content}>
      <View>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.contenttext}>
        <View>
          <Text style={styles.contentext1}>
          {title}
          </Text>
        </View>

        <View style={styles.favicontxt}>
          <Image style={styles.favicon} source={pic2} />
          <Text>{author} </Text>
          <Text style={styles.dot}></Text>
          <Text>{readtime}</Text>
        </View>
      </View>
            </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    paddingTop: 20,
    flexDirection: "row",
    marginTop: 10,
  },
  image: {
    height: 120,
    width: 100,
  },
  favicon: {
    height: 25,
    width: 25,
    borderRadius: 10,
  },
  contenttext: {
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  favicontxt: {
    flexDirection: "row",
    marginVertical: 20,
  },
  contentext1: {
    fontSize: 20,
    fontWeight: "300",
  },
  dot: {
    height: 5,
    width: 5,
    backgroundColor: "grey",
    borderRadius: 5,
    marginTop: 8,
    marginHorizontal: 5,
  },
});

export default Card;
