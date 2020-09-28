import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Import screens
import Home from "./screens/Home";
import Login from "./screens/Login";
import CreateJoinRoom from "./screens/CreateJoinRoom";
import JoinLobby from "./screens/JoinLobby";
import CreateLobby from "./screens/CreateLobby";
import Lobby from "./screens/Lobby";
/*
  This file is a main file for the entire frntend of the project. 
  It imports all the screens and gives each screen a name to be addressed by.
*/
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateJoinRoom" component={CreateJoinRoom} />
        <Stack.Screen name="CreateLobby" component={CreateLobby} />
        <Stack.Screen name="JoinLobby" component={JoinLobby} />
        <Stack.Screen name="Lobby" component={Lobby} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
