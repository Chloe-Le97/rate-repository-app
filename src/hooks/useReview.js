import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-native';

import {REVIEW} from '../graphql/mutations';

const useReview = () =>{

  const history = useHistory();

  const [mutate, result] = useMutation(REVIEW);

  const reviewRep = async ({ repositoryName, ownerName, text, ratingNum }) => {
    // call the mutate function here with the right arguments
    const rating = parseInt(ratingNum);
    const result = await mutate({ variables: { repositoryName, ownerName, text, rating } });
    if(result.data.createReview){
      history.push(`/repo/${result.data.createReview.repositoryId}`);
    }
    return result;
  };

  return [reviewRep, result];
};

export default useReview;
