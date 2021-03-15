import RepositoryListContainer from './RepositoryContainer';
import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';

import useRepositories from '../../hooks/useRepositories';
import {useHistory} from 'react-router-native';
import { useDebounce } from 'use-debounce';


const RepositoryList = () => {

  const [selectedOrder, setSelectedOrder] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [searchKeyword] = useDebounce(searchInput, 500);

  const history = useHistory();

  let order;
  let orderDirection;

  switch(selectedOrder){
    case 'latest':
      order = 'CREATED_AT';
    break;
    case 'rateHighest': 
      order = 'RATING_AVERAGE';
      orderDirection = 'DESC';
    break;
    case 'rateLowest': 
      order = 'RATING_AVERAGE';
      orderDirection = 'ASC';
    break;
    default:
      order = 'CREATED_AT';
  }

  const { repositories, fetchMore, loading } = useRepositories({searchKeyword:searchKeyword,order:order,orderDirection:orderDirection,first:2});

  const onEndReach = () => {
    fetchMore();
  };
 

  if (loading) {
    return <Text>loading...</Text>;
  }

  // const repositories = data.repositories;

  console.log(repositories)

  return <RepositoryListContainer onEndReach={onEndReach} searchInput={searchInput} setSearchInput={setSearchInput} selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} history={history} repositories={repositories} />;

};

export default RepositoryList;