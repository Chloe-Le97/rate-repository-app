import React from 'react';
import {useParams} from 'react-router-native';
import { useQuery } from '@apollo/client';
import {SINGLE_REPOSITORY} from '../../graphql/queries';
import RepositoryItem from '../RepositoryItem/index';
import { View, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import theme from '../../theme';
import Text from '../Text';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
    main:{
        backgroundColor: 'white',
        paddingBottom: 20,
        marginBottom: 10,
    },
    btnDiv:{
        paddingLeft: 20,
        paddingRight: 20,
    },
    openBtn:{
        backgroundColor: '#0366d6',
        padding: 10,
        borderRadius: 5,
    },  
    textSubmit:{
        color: 'white',
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
        textAlign: 'center',
      },
    separator: {
        height: 10,
    },
    reviewDiv:{
        padding: 20,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
    },
    rating:{
        color: theme.colors.primary,
        textAlign:'center',
        fontSize: 17,
        fontWeight: theme.fontWeights.bold,
    },
    ratingDiv:{
        borderWidth: 2,
        borderRadius: 25,
        borderColor: theme.colors.primary,
        width: 50,
        height: 50,
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    reviewDetails:{
        flexShrink:1,
        marginLeft: 20,
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
    // Repository's information implemented in the previous exercise
    return(
        <View style={styles.main}>
        <RepositoryItem item={repository} />
        <View style={styles.btnDiv}>
            <TouchableWithoutFeedback onPress={()=>Linking.openURL(repository.url)}>
                <View style={styles.openBtn}>
                <Text style={styles.textSubmit}>Open on Github</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>

    </View>
    );
  };
  
const ReviewItem = ({ review }) => {
    return(
        <View style={styles.reviewDiv} >
            <View style={styles.ratingDiv}>
                <Text style={styles.rating}>{review.rating}</Text>
            </View>
            <View style={styles.reviewDetails}> 
                <Text fontWeight="bold" >{review.user.username}</Text>
                <Text style={{color:'grey'}}>{review.createdAt.substring(0, 10)}</Text>
                <Text style={{fontWeight:'400'}}>{review.text}</Text>
            </View>
        </View>
    )
};


const SingleView = () => {



    const id = useParams().id;

    const { loading, error, data } = useQuery(SINGLE_REPOSITORY, {
        fetchPolicy: 'cache-and-network',
        variables: { id },
      });

    
    if(loading){return <Text>Loading....</Text>}
      
    const reviewNodes = data.repository
    ? data.repository.reviews.edges.map(edge => edge.node)
    : [];

    return(
        <View style={{marginBottom: 900, flexGrow:1}}>
        <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} />}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() =>
             <RepositoryInfo repository={data.repository} />}
        // ...
      />
        </View>
    );
};

export default SingleView;