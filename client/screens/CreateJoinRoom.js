import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { AsyncStorage } from "react-native";

export default function CreateJoinRoom(props) {
  const [name, setName] = useState("Name");

  function createLobby() {
    console.log("create lobby clicked!");
    props.navigation.navigate("CreateLobby");
  }

  function joinLobby() {
    console.log("join lobby clicked!");
    props.navigation.navigate("JoinLobby");
  }

  async function getName() {
    let name = await AsyncStorage.getItem("@Store:name");
    setName(name);
  }
  useEffect(() => {
    getName();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 50, marginBottom: "30%" }}>Hello, {name}</Text>

      <View
        style={{
          backgroundColor: "#C70039",
          height: "5%",
          width: "55%",
          borderRadius: 10,
          elevation: 6,
          marginBottom: 30,
        }}
      >
        <Button
          onPress={createLobby}
          title="Create a Lobby"
          color="rgb(255,255,255)"
        ></Button>
      </View>

      <View
        style={{
          backgroundColor: "#C70039",
          height: "5%",
          width: "55%",
          borderRadius: 10,
          elevation: 6,
        }}
      >
        <Button
          onPress={joinLobby}
          title="Join a Lobby"
          color="rgb(255,255,255)"
        ></Button>
      </View>
    </View>
  );
}
