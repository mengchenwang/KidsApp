import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

export const Rewards = () => {
  return (
    <Layout style={styles.container}>
      <Text>Rewards</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
