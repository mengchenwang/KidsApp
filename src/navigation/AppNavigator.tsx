import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {Missions as MissionsScreen} from '../screens/Missions';
import {Rewards as RewardsScreen} from '../screens/Rewards';
import {PiggyBank as PiggyBankScreen} from '../screens/PiggyBank';
import {TickIcon, GiftIcon, CardIcon} from '../components/icons';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}: BottomTabBarProps) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}
    style={styles.tabBar}>
    <BottomNavigationTab title="Missions" icon={TickIcon} />
    <BottomNavigationTab title="Rewards" icon={GiftIcon} />
    <BottomNavigationTab title="Piggy Bank" icon={CardIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name="Missions" component={MissionsScreen} />
    <Screen name="Rewards" component={RewardsScreen} />
    <Screen name="PiggyBank" component={PiggyBankScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <SafeAreaProvider>
      <TabNavigator />
    </SafeAreaProvider>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  tabBar: {
    height: 90,
    paddingBottom: 20,
  },
});
