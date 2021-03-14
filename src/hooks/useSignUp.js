import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-native';

import {CREATE_USER} from '../graphql/mutations';
import useSignIn from './useSignIn';

const useSignUp = () => {
    const history = useHistory();
    const [signIn] = useSignIn();

    const [mutate, result] = useMutation(CREATE_USER);
  
    const signUp = async ({ username, password }) => {
      // call the mutate function here with the right arguments
      const result = await mutate({ variables: { username, password } });
      
      if(result.data.createUser){
        await signIn({ username, password });
        // history.push('/');
      }
      return result;
    };

    return [signUp, result];
  };

export default useSignUp;