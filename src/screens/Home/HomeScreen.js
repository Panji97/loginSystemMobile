import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#101010',

    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
  },
});

export default HomeScreen;
