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
              <Ionicons style={{ marginLeft: 10}} name="chevron-back" size={32} color="black" />
            ),
            headerRight: () => (
              <View style={{flexDirection: "row",}}>
              <MaterialIcons
                style={{ marginHorizontal: 5 }}
                name="headset"
                size={32}
                color="black"
              />
                <Feather style={{ marginHorizontal: 5 }} name="heart" size={32} color="black" />
              <AntDesign
                style={{ marginHorizontal: 5 }}
                name="sharealt"
                size={32}
                color="black"
              />
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
              <EvilIcons
                style={{ marginLeft: 20 }}
                name="navicon"
                size={40}
                color="black"
              />
            ),
            headerRight: () => (
              <EvilIcons
                style={{ marginRight: 20 }}
                name="search"
                size={30}
                color="black"
              />
            ),
          }}
          name="home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
