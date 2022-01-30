/**
 * Home Screen
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.homeView}>
      <Text>Keystone Bank</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
