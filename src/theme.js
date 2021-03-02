import { Platform } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";


const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      bar: '#24292e',
      
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: Platform.select({
      android: 'Roboto_400Regular',
      ios: 'Arial_400Regular',
      default: 'System',
    }),
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    textAlign: {
      middle: 'center'
    }
  };
  
export default theme;