import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  SafeAreaView,
  SectionList,
} from "react-native";
import { AsyncStorage } from "react-native";
const io = require("socket.io-client");
const socket = io("http://192.168.1.219:8000");

export default function Lobby(props) {
  const { lobbyId } = props.route.params;
  const [name, setName] = useState("Name");
  const [players, setPlayerList] = useState([]);

  function buildPlayerList() {
    console.log("building data...");

    let arr = [];
    let myName = props.route.params.name;

    console.log("My name is " + myName);

    return data;
  }

  socket.on("new_player_joined_lobby", (payload) => {
    console.log("new_player_joined_lobby:");
    console.log(payload);
    setPlayerList(payload);
  });

  useEffect(() => {
    async function init() {
      let my_name = await AsyncStorage.getItem("@Store:name");
      socket.emit("join_room", { roomName: props.route.params, name: my_name });
    }

    init();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 20, fontSize: 50, marginBottom: 20 }}>
        Lobby: {lobbyId}
      </Text>

      {players.map((player) => (
        <Text
          key={player}
          style={{ marginTop: 20, fontSize: 50, marginBottom: 20 }}
        >
          {player.name}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});
