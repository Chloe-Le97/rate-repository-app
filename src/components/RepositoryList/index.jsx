import RepositoryListContainer from './RepositoryContainer';
import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';

import useRepositories from '../../hooks/useRepositories';

const RepositoryList = () => {

  const { data,loading } = useRepositories();
 

  if (loading) {
    return <Text>loading...</Text>;
  }

  const repositories = data.repositories;

  console.log(repositories);

  return <RepositoryListContainer repositories={repositories} />;

};

export default RepositoryList;