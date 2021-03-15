import React, {useState, useEffect} from 'react';
import { FlatList, View, StyleSheet, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';

import RepositoryItem from '../RepositoryItem';
import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    flatlist:{
      marginBottom: 1000,
      flexGrow:1, 
      height: Dimensions.get('window').height - 30
    }
  });

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    // this.props contains the component's props
    const {selectedOrder,setSelectedOrder, searchInput, setSearchInput} = this.props;

    return (
      <View>
      <TextInput placeholder="Search" value={searchInput} onChangeText={setSearchInput}></TextInput>
      <Picker
        mode="dialog"
        selectedValue={selectedOrder}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedOrder(itemValue)
        }>
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="rateHighest" />
        <Picker.Item label="Lowest rated repositories" value="rateLowest" />
      </Picker>
      </View>
    );
  };

  render() {

    const {repositories,history, onEndReach} = this.props;

    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    return (
      <View style={styles.flatlist}>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={{ minHeight: `100%` }}
        scrollEnabled={true}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        renderItem={({ item, index, ItemSeparatorComponent })=>(
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => history.push(`repo/${item.id}`)}>
              <RepositoryItem item={item}/>
            </TouchableOpacity>   
          </View>
        )}
        ListHeaderComponent={this.renderHeader}
      />
      </View>
    );
  }
}


export default RepositoryListContainer;