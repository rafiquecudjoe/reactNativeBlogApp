import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import BlogDetails from "./screens/blogDetails";
import { EvilIcons } from "@expo/vector-icons";
import {
  Ionicons,
  Feather,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          options={{
            title: "Programming",
            headerTitleAlign: "left",
            headerTitleStyle:{marginRight:10},

            headerLeft: () => (
              <TouchableOpacity><Ionicons style={{ marginLeft: 10}} name="chevron-back" size={32} color="black" /></TouchableOpacity>
              
            ),
            headerRight: () => (
              <View style={{flexDirection: "row",}}>
              <TouchableOpacity><MaterialIcons
                style={{ marginHorizontal: 5 }}
                name="headset"
                size={32}
                color="black"
              /></TouchableOpacity>
                <TouchableOpacity><Feather style={{ marginHorizontal: 5 }} name="heart" size={32} color="black" /></TouchableOpacity>
                <TouchableOpacity><AntDesign
                style={{ marginHorizontal: 5 }}
                name="sharealt"
                size={32}
                color="black"
              /></TouchableOpacity>
            </View>
            ),
          }}
          name="home"
          component={Home}
          name="blogDetails"
          component={BlogDetails}
        />

        <Stack.Screen
          options={{
            title: "The Tech Guy",
            headerTitleAlign: "center",

            headerLeft: () => (
              <TouchableOpacity><EvilIcons
              style={{ marginLeft: 20 }}
              name="navicon"
              size={40}
              color="black"
            /></TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity><EvilIcons
              style={{ marginRight: 20 }}
              name="search"
              size={30}
              color="black"
            /></TouchableOpacity>
            ),
          }}
          name="home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
