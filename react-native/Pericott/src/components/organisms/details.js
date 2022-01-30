/**
 * Home Screen
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.homeView}>
      <Text>Bank Details</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
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

export default DetailsScreen;
