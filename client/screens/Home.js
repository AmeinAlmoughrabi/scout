import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import io, { Socket } from "socket.io-client";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MaterialButton from "@material-ui/core/Button";

export default function Home(props) {
  //const socket = io.connect("http://localhost:5000");

  return (
    <View>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Welcome to Scout
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" gutterBottom>
            Start playing now
          </Typography>
        </Grid>
        <Grid item>
          <MaterialButton onClick={() => props.navigation.navigate("Signup")}>
            Sign up
          </MaterialButton>
        </Grid>
        <Grid item>
          <MaterialButton onClick={() => props.navigation.navigate("Login")}>
            Log in
          </MaterialButton>
        </Grid>
      </Grid>
      <StatusBar style="auto" />
    </View>
  );
}
