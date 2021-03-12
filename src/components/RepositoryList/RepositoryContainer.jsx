import React, {useState, useEffect} from 'react';
import { FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {useHistory} from 'react-router-native';
import RepositoryItem from '../RepositoryItem';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({repositories}) =>{

  const history = useHistory();

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
            <TouchableOpacity onPress={() => history.push(`repo/${item.id}`)}>
              <RepositoryItem item={item}/>
            </TouchableOpacity>   
          </View>
  
    )}
  />
  </View>
);
};

export default RepositoryListContainer;