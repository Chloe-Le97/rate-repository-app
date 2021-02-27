import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bar,
    
  },
  text:{
    color: 'white',
    padding: 15,
  }
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>

        <TouchableWithoutFeedback>
            <Text style={styles.text}>Repositories</Text>
        </TouchableWithoutFeedback>
      
    </View>);
};

export default AppBar;