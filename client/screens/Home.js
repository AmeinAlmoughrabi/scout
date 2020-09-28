import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function Home(props) {
  function HelloFunction() {
    props.navigation.navigate("Login");
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 50, marginBottom: "60%" }}>Project Scout</Text>

      <View
        style={{ marginTop: 15 }}
        style={{
          backgroundColor: "#C70039",
          height: "5%",
          width: "55%",
          borderRadius: 10,
          elevation: 1,
        }}
      >
        <Button
          onPress={HelloFunction}
          title="Enter"
          color="rgb(255,255,255)"
        ></Button>
      </View>
    </View>
  );
}
