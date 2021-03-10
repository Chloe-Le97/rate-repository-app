import React, {useState, useEffect} from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  // const [repositories, setRepositories] = useState();

  const { data, error, loading } = useQuery(GET_REPOSITORIES,{
    fetchPolicy: 'cache-and-network',
    // Other options
  });

  if (loading) {
    return <Text>loading...</Text>;
  }

  const repositories = data;

  console.log(repositories);

  // const fetchRepositories = async () => {
  //   // Replace the IP address part with your own IP address!
  //   const response = await fetch('http://192.168.0.101:5000/api/repositories');
  //   const json = await response.json();

  //   console.log(json);

  //   setRepositories(json);
  // };

  // useEffect(() => {
  //   fetchRepositories();
  // }, []);

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.repositories.edges.map(edge => edge.node)
    : [];

  return (
    <View style={{marginBottom: 900, flexGrow:1}}>
          <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      contentContainerStyle={{ minHeight: `100%` }}
      scrollEnabled={true}
      renderItem={({ item, index, ItemSeparatorComponent })=>(
        <View style={{ flex: 1 }}>
          <RepositoryItem item={item}/>
        </View>
        
      )}
    />
    </View>
  );
};

export default RepositoryList;