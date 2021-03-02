import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';

import theme from '../theme';
// import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bar,
    flexDirection: 'row',
  },
  text:{
    color: 'white',
    padding: 15,
    fontSize: 16,
    fontWeight: '600',
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>

        <Link to="/signin">
          <Text style={styles.text}>Sign In</Text>
        </Link>

      </ScrollView>
    </View>);
};

export default AppBar;