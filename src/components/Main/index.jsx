import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import SignIn from '../SignIn/index';
import SignUp from '../SignUp/index';
import RepositoryList from '../RepositoryList/index';
import AppBar from '../AppBar';
import SingleView from '../SingleView';
import Review from '../Review';

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
        <Route path="/signup" exact> 
          <SignUp/>
        </Route>
        <Route path="/review" exact>
          <Review/>
        </Route>
        <Route path="/repo/:id" exact>
          <SingleView/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
