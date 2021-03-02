import React from 'react';
import { TextInput as NativeTextInput, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    textInputError:{
        borderColor: '#d73a4a',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 15,
        color: 'black',
    }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return (
      <View>
          {error?(
          <NativeTextInput style={styles.textInputError} {...props}/>)
          :(<NativeTextInput style={textInputStyle} {...props} />)}
          
      </View>
  );
};

export default TextInput;