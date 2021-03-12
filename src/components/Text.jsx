import React from 'react';
import { Text as NativeText, StyleSheet} from 'react-native';
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