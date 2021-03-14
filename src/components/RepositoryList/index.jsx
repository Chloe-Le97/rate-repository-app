import RepositoryListContainer from './RepositoryContainer';
import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';

import useRepositories from '../../hooks/useRepositories';

const RepositoryList = () => {

  const [selectedOrder, setSelectedOrder] = useState();

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

  const { data,loading } = useRepositories(order,orderDirection);
 

  if (loading) {
    return <Text>loading...</Text>;
  }

  const repositories = data.repositories;

  console.log(repositories);

  return <RepositoryListContainer selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} repositories={repositories} />;

};

export default RepositoryList;