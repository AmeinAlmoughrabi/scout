import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import io, { Socket } from "socket.io-client";
import { useGeolocation } from "react-use";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MaterialButton from "@material-ui/core/Button";

export default function Game(props) {
  //const socket = io.connect("http://localhost:5000");
  const player_location = useGeolocation();
  console.log(player_location);
  return (
    <View>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h5" gutterBottom>
            You in a game
          </Typography>
          <Typography variant="h5" gutterBottom>
            Your latitude: {player_location.latitude}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Your longitude: {player_location.longitude}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Your speed: {player_location.speed}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Your altitude: {player_location.altitude}
          </Typography>
          <Typography variant="h5" gutterBottom>
            accuracy: {player_location.accuracy}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Time recorded: {player_location.timestamp}
          </Typography>
        </Grid>
      </Grid>
      <StatusBar style="auto" />
    </View>
  );
}
