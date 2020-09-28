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

const data = [{ name: "test1" }, { name: "test2" }];

export default function Lobby(props) {
  const { lobbyId } = props.route.params;
  const { name } = props.route.params;
  const [players, setPlayerList] = useState(data);

  function buildPlayerList() {
    console.log("building data...");

    let arr = [];
    let myName = props.route.params.name;

    console.log("My name is " + myName);

    return data;
  }

  useEffect(() => {
    ///console.log(buildPlayerList());
    // setPlayerList(buildPlayerList());
  });

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 20, fontSize: 50, marginBottom: 20 }}>
        Lobby: {lobbyId}
      </Text>
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
