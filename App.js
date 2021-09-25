import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import BlogDetails from "./screens/blogDetails";
import { EvilIcons } from "@expo/vector-icons";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="blogDetails" component={BlogDetails} />
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
