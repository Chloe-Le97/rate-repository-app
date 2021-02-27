import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import theme from '../theme'

import Text from './Text';

const RepositoryItem = (props) =>{

    const item = props.item;

    const styles = StyleSheet.create({
        container:{
            marginTop: 10,
        },
        avatar: {
            width: 66,
            height: 58,
            borderRadius: 10,
            flexGrow:0,
        },
        language: {
            backgroundColor: theme.colors.primary,
            color: 'white',
            padding: 8,
            borderRadius: 5,
        },
        rowflex: {
            flexDirection: 'row',
        },
        flexItemB:{
            marginLeft: 20
        }
      });

    return(
        <View style={styles.container} key={item.id}>
            <View style={styles.rowflex}>
                <Image style={styles.avatar} 
                source={{
                    uri: `${item.ownerAvatarUrl}`,
                }}
                />
                <View style={styles.flexItemB}>
                    <Text style={{padding: 8}} fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
                    <Text style={{padding: 8}}>{item.description}</Text>
                    <View style={{ alignSelf: 'flex-start',padding: 8}} ><Text style={styles.language} >{item.language}</Text></View>
                </View>
            </View>
                
           <View>
                <View>
                    <Text>{item.stargazersCount>1000?(<Text>{item.stargazersCount/1000}k</Text>):(<Text>{item.stargazersCount}</Text>)}</Text>
                    <Text>Stars</Text>
                </View>
                <View>
                    <Text>{item.forksCount>1000?(<Text>{item.forksCount/1000}k</Text>):(<Text>{item.forksCount}</Text>)}</Text>
                    <Text>Stars</Text>
                </View>
                <View>
                    <Text>{item.reviewCount}</Text>
                    <Text>Reviews</Text>
                </View>
                <View>
                    <Text>{item.ratingAverage}</Text>
                    <Text>Rating</Text>
                </View>
                
           </View>

        </View>
    );
};

export default RepositoryItem;