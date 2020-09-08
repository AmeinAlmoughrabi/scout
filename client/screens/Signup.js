import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MaterialButton from "@material-ui/core/Button";

export default function Signup(props) {
  return (
    <View>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h5" gutterBottom>
            What is your email address?
          </Typography>
        </Grid>
        <Grid item>
          <MaterialButton>Continue</MaterialButton>
        </Grid>
      </Grid>
      <StatusBar style="auto" />
    </View>
  );
}
