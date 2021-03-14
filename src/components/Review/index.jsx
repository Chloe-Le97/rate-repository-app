import React from 'react';

import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
import useReview from '../../hooks/useReview';


const styles = StyleSheet.create({
  form:{
    padding: 20,
    backgroundColor: 'white',
  },
  reviewBtn:{
    backgroundColor: '#0366d6',
    padding: 10,
    borderRadius: 5,
  },
  textSubmit:{
    color: 'white',
  }
});

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
  .number()
  .integer()
  .min(0)
  .max(100)
  .required('Rating is required'),
  text: yup
  .string()
  .required('Review is required'),
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

export const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name"/>
      <FormikTextInput name="repositoryName" placeholder="Repository name"/>
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100"/>
      <FormikTextInput name="text" placeholder="Review"/>
      <TouchableWithoutFeedback onPress={onSubmit}>
        <View style={styles.reviewBtn}>
          <Text style={styles.textSubmit} fontSize = 'subheading' textAlign = 'mid' fontWeight="bold">Create a review</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const ReviewContainer = ({onSubmit}) =>{
  return(
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const Review = () => {

  const [review] = useReview();

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, text, rating } = values;

    const ratingNum = parseInt(rating);

    try {
      const data  = await review({ repositoryName, ownerName, text, ratingNum });
      console.log(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ReviewContainer onSubmit={onSubmit}/>
  );
};

export default Review;    