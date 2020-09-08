import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Import screens
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import CreateOrJoinLobby from "./screens/CreateOrJoinLobby";
import JoinLobby from "./screens/JoinLobby";
import Game from "./screens/Game";
/*
  This file is a main file for the entire frntend of the project. 
  It imports all the screens and gives each screen a name to be addressed by.
*/
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="CreateOrJoinLobby" component={CreateOrJoinLobby} />
        <Stack.Screen name="JoinLobby" component={JoinLobby} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
