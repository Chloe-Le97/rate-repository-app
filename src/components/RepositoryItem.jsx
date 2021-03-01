import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import theme from '../theme';

import Text from './Text';

const RepositoryItem = (props) =>{

    const item = props.item;

    const styles = StyleSheet.create({
        container:{
            padding: 15,
            backgroundColor: 'white',
        },
        avatar: {
            width: 66,
            height: 66,
            borderRadius: 10,
            flexGrow:0,
            // marginTop: 5,
        },
        language: {
            backgroundColor: theme.colors.primary,
            color: 'white',
            padding: 8,
            borderRadius: 5,
        },
        rowflexA: {
            flexDirection: 'row',
        },
        rowflexB:{
            // marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        flexItemB:{
            marginLeft: 20
        }
      });

    return(
        <View style={styles.container} key={item.id}>
            <View style={styles.rowflexA}>
                <Image style={styles.avatar} 
                source={{
                    uri: `${item.ownerAvatarUrl}`,
                }}
                />
                <View style={styles.flexItemB}>
                    <Text style={{padding: 8}} fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
                    <Text style={{padding: 8}}>{item.description}</Text>
                    <View style={{ alignSelf: 'flex-start',padding: 8}} ><Text textAlign="center" style={styles.language} >{item.language}</Text></View>
                </View>
            </View>
                
           <View style={styles.rowflexB}>
                <View>
                    <Text>{item.stargazersCount>1000?(<Text textAlign="mid" fontWeight="bold">{item.stargazersCount/1000}k</Text>):(<Text textAlign="mid" fontWeight="bold">{item.stargazersCount}</Text>)}</Text>
                    <Text textAlign="mid">Forks</Text>
                </View>
                <View>
                    <Text>{item.forksCount>1000?(<Text textAlign="mid" fontWeight="bold">{item.forksCount/1000}k</Text>):(<Text textAlign="center" fontWeight="bold">{item.forksCount}</Text>)}</Text>
                    <Text textAlign="mid">Stars</Text>
                </View>
                <View>
                    <Text textAlign="mid" fontWeight="bold">{item.reviewCount}</Text>
                    <Text textAlign="mid">Reviews</Text>
                </View>
                <View>
                    <Text textAlign="mid" fontWeight="bold">{item.ratingAverage}</Text>
                    <Text textAlign="mid">Rating</Text>
                </View>
                
           </View>

        </View>
    );
};

export default RepositoryItem;