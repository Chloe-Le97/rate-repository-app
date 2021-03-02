import React from 'react';
import { Text as NativeText, StyleSheet} from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import {AppLoading} from "expo";

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  alignCenter:{
    textAlign: 'center'
  }
});

const Text = ({ color, fontSize, fontWeight, textAlign, style, ...props }) => {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }
  
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    textAlign == 'mid' && styles.alignCenter,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;