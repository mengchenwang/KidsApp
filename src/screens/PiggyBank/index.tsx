import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

export const PiggyBank = () => {
  return (
    <Layout style={styles.container}>
      <Text>Piggy Bank</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
