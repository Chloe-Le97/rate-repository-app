import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import SignIn from './SignIn';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#e1e4e8',
    minHeight: 1500
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact> 
          <SignIn/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
