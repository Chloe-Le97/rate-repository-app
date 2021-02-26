import React from 'react';
import Constants from 'expo-constants';
// import { Text, StyleSheet, View } from 'react-native';
import Text from './Text';

import RepositoryList from './RepositoryList';

// const styles = StyleSheet.create({
//   container: {
//     marginTop: Constants.statusBarHeight,
//     flexGrow: 1,
//     flexShrink: 1,
//   },
// });

// const Main = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Rate Repository Application</Text>
//       <RepositoryList/>
//     </View>
//   );
// };

// export default Main;

const Main = () => {
  return (
    <>
      <Text>Simple text</Text>
      <Text style={{ paddingBottom: 10 }}>Text with custom style</Text>
      <Text fontWeight="bold" fontSize="subheading">
        Bold subheading
      </Text>
      <Text color="textSecondary">Text with secondary color</Text>
    </>
  );
};

export default Main;