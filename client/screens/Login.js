import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { AsyncStorage } from "react-native";

export default function Login(props) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  async function loginHandler() {
    console.log("login clicked!");
    storeName(email).then(() => {
      props.navigation.navigate("CreateJoinRoom");
    });
  }

  async function storeName(email) {
    try {
      await AsyncStorage.setItem("NAME", email);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 50, marginBottom: "30%" }}>Pick a name</Text>

      <View
        style={{
          height: "5%",
          width: "55%",
          borderRadius: 10,
          elevation: 1,
          marginBottom: 20,
        }}
      >
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangeEmail(text)}
          keyboardType="default"
          placeholder="Name"
          value={email}
        />
      </View>

      {/*
      <View
        style={{
          height: "5%",
          width: "55%",
          borderRadius: 10,
          elevation: 1,
          marginBottom: 20,
        }}
      >
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangePassword(text)}
          autoCompleteType="password"
          keyboardType="default"
          placeholder="password"
          secureTextEntry={true}
          value={password}
        />
      </View>

      */}
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
          onPress={loginHandler}
          title="Login"
          color="rgb(255,255,255)"
        ></Button>
      </View>
    </View>
  );
}
