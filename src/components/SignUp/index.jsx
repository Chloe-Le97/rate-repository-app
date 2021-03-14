import React, { useState } from 'react';

import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
import useSignUp from '../../hooks/useSignUp';


const styles = StyleSheet.create({
  form:{
    padding: 20,
    backgroundColor: 'white',
  },
  signInBtn:{
    backgroundColor: '#0366d6',
    padding: 10,
    borderRadius: 5,
  },
  textSubmit:{
    color: 'white',
  },
  errorText:{
    color: 'red',
    marginBottom: 15, 
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
  passwordConfirm: yup.string()
    .oneOf([yup.ref('password'), null], "Confirm password does not match")
    .required('Confirm password is required')
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: '',
};

export const SignUpForm = ({error, errorMessage, onSubmit }) => {
  // console.log(errorMessage);
  return (
    <View style={styles.form}>
      <FormikTextInput name="username" placeholder="Username" testID="username" />
      <FormikTextInput secureTextEntry={true} name="password" placeholder="Password" testID="password" />
      <FormikTextInput secureTextEntry={true} name="passwordConfirm" placeholder="Confirm Password" testID="confirmPassword" />
      {error?(<Text textAlign="mid" style={styles.errorText}>{errorMessage}</Text>):(null)}
      <TouchableWithoutFeedback testID="submitBtn" onPress={onSubmit}>
        <View style={styles.signInBtn}>
          <Text style={styles.textSubmit} fontSize = 'subheading' textAlign = 'mid' fontWeight="bold">Sign Up</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const SignUpContainer = ({error, errorMessage,onSubmit}) =>{
  return(
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignUpForm error={error} errorMessage={errorMessage} onSubmit={handleSubmit} />}
    </Formik>

  );
};

const SignUp = () => {

  const [signUp] = useSignUp();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data  = await signUp({ username, password });
      console.log(data.data.authorize);
    } catch (e) {
      setError(true);
      setErrorMessage('Error! Try again after a few minutes');
      setTimeout(()=>{
        setError(false);
        setErrorMessage('');
      },5000);
    }
  };

  return (
    <SignUpContainer error={error} errorMessage={errorMessage} onSubmit={onSubmit}/>
  );
};

export default SignUp;    