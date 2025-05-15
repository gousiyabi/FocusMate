
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from './screens/OnboardingScreen';
import WelcomePage from './screens/WelcomePage';
import FocusMode from './screens/FocusMode';
import DistractionCheck from './screens/DistractionCheck';
import RewardSystem from './screens/RewardSystem';
import StudyChallenge from './screens/StudyChallenge';
import Analytics from './screens/Analytics';
import Settings from './screens/Settings';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="Focus" component={FocusMode} />
        <Stack.Screen name="Distraction" component={DistractionCheck} />
        <Stack.Screen name="Rewards" component={RewardSystem} />
        <Stack.Screen name="Challenge" component={StudyChallenge} />
        <Stack.Screen name="Analytics" component={Analytics} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;