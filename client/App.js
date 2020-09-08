import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import io, { Socket } from "socket.io-client";
import GoogleMapReact from 'google-map-react';

export default function App() {
  const socket = io.connect("http://localhost:5000");

  function joinRoom() {
    socket.emit("join_room", { roomName: "castle" });
  }

  function updateLocation() {
    socket.emit("update_player_location", {
      latitude: "1000",
      longitude: "1000",
    });
  }

  return (
    <View style={styles.container}>
      <Text>Yeah</Text>
      <Button onPress={joinRoom} title="Join"></Button>
      <Button onPress={updateLocation} title="update"></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
