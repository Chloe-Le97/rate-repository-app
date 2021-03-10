import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-native';

import {SIGN_IN} from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';

import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
    const history = useHistory();
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const [mutate, result] = useMutation(SIGN_IN);
  
    const signIn = async ({ username, password }) => {
      // call the mutate function here with the right arguments
      const result = await mutate({ variables: { username, password } });
      if(result.data.authorize){
        await authStorage.setAccessToken(result.data.authorize.accessToken);
        apolloClient.resetStore();
        history.push('/');
      }
      return result;
    };

    return [signIn, result];
  };

export default useSignIn;