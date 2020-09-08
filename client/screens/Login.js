import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MaterialButton from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Login(props) {
  return (
    <View>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <TextField
            required
            id="standard-required"
            defaultValue="Username/Email"
          />
        </Grid>
        <Grid item>
          <TextField required id="standard-required" defaultValue="Password" />
        </Grid>
        <Grid item>
          <MaterialButton
            onClick={() => props.navigation.navigate("CreateOrJoinLobby")}
          >
            Login
          </MaterialButton>
        </Grid>
      </Grid>
      <StatusBar style="auto" />
    </View>
  );
}
