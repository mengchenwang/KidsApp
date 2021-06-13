import React, {FC, ReactNode} from 'react';
import {StyleSheet, SafeAreaView, ImageBackground} from 'react-native';

const background = require('../../assets/img/background.png');

interface props {
  children: ReactNode;
}

export const SafeArea: FC<props> = ({children}) => (
  <ImageBackground style={styles.background} source={background}>
    <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginBottom: 10,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
