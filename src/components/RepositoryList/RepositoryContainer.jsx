import React, {useState, useEffect} from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from '../RepositoryItem';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({repositories}) =>{
  console.log(repositories);
  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
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

export default RepositoryListContainer;