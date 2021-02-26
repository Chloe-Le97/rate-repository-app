import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const RepositoryItem = (props) =>{

    const item = props.item;

    return(
        <View key={item.id}>
                    <Text>Fullname: {item.fullName}</Text>
                    <Text>Description: {item.description}</Text>
                    <Text>Language: {item.language}</Text>
                    <Text>Stars: {item.forksCount}</Text>
                    <Text>Reviews: {item.stargazersCount}</Text>
                    <Text>Rating: {item.ratingAverage}</Text>
        </View>
    );
};

export default RepositoryItem;