import React from 'react';
import Sentry from 'sentry-expo';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import CounterScreen from './CounterScreen';
import SentryBoundary from './SentryBoundary';

Sentry.enableInExpoDevelopment = true;
Sentry.config('https://4b27ae19c5c44f9d80b2eb2b475cd17e@sentry.io/1293546').install();

const RootStack = createStackNavigator ({
  Home: {
    screen: HomeScreen
  },
  Counter: {
    screen: CounterScreen
  }
})

export default class App extends React.Component {
  render() {
    return (
      <SentryBoundary>
        <RootStack />
      </SentryBoundary>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
