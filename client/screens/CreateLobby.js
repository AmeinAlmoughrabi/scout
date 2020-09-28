import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CreateLobby(props) {
  const [lobby, onChangeLobby] = React.useState(makeid(5));
  const navigation = useNavigation();

  function goToLobby() {
    props.navigation.navigate("Lobby", { lobbyId: lobby });
  }

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />

      <Text style={{ fontSize: 50, marginBottom: "30%" }}>Create Lobby</Text>

      <View
        style={{
          height: "5%",
          width: "55%",
          borderRadius: 10,
          elevation: 1,
          marginBottom: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>{lobby}</Text>
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
          onPress={goToLobby}
          title="Create"
          color="rgb(255,255,255)"
        ></Button>
      </View>
    </View>
  );
}
