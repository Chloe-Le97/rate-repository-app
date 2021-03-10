import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { Link, useHistory } from "react-router-native";
import Constants from 'expo-constants';

import theme from '../theme';
import {USER_AUTH_STATUS} from '../graphql/queries';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import useAuth from '../hooks/useAuthStorage';

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

  const {data} = useQuery(USER_AUTH_STATUS,{
    fetchPolicy: 'cache-and-network',
    // Other options
  });

  const authStorage = useAuth();
  const apolloClient = useApolloClient();
  const history = useHistory();

  const signOut = async () =>{
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    history.push('/');
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>

      {data?.authorizedUser?(
        <TouchableWithoutFeedback onPress={signOut}>
          <View>
            <Text style={styles.text}>Sign Out</Text>
          </View>
        </TouchableWithoutFeedback>
      ):(
      
        <Link to="/signin">
          <Text style={styles.text}>Sign In</Text>
        </Link>
      )}


      </ScrollView>
    </View>);
};

export default AppBar;