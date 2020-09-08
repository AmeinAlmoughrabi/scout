import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MaterialButton from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function JoinLobby(props) {
  return (
    <View>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Enter Lobby Code
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            required
            id="standard-required"
            defaultValue="Lobby Code"
          />
        </Grid>
        <Grid item>
          <MaterialButton onClick={() => props.navigation.navigate("Game")}>
            Continue
          </MaterialButton>
        </Grid>
      </Grid>
      <StatusBar style="auto" />
    </View>
  );
}
