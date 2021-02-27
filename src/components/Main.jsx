import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
// import Text from './Text';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <RepositoryList/>
    </View>
  );
};

export default Main;

// const Main = () => {
//   return (
//     <>
//       <Text>Simple text</Text>
//       <Text style={{ paddingBottom: 10 }}>Text with custom style</Text>
//       <Text fontWeight="bold" fontSize="subheading">
//         Bold subheading
//       </Text>
//       <Text color="textSecondary">Text with secondary color</Text>
//     </>
//   );
// };

// export default Main;