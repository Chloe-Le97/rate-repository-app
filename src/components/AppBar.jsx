import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bar,
    flexDirection: 'row',
  },
  text:{
    color: 'white',
    padding: 15,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repository</Text>
        </Link>

        <Link to="/signin">
          <Text style={styles.text}>Sign In</Text>
        </Link>

      </ScrollView>
    </View>);
};

export default AppBar;