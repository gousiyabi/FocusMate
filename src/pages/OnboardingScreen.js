import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
  let backgroundColor = selected ? '#6C63FF' : '#ccc';
  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        borderRadius: 3,
        backgroundColor,
      }}
    />
  );
};

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginRight: 10 }} {...props}>
    <Text style={{ fontWeight: 'bold', color: '#6C63FF' }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.replace('Login')}
      DotComponent={Dots}
      DoneButtonComponent={Done}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/illustration1.png')} style={{ height: 250, width: 250 }} />,
          title: 'Welcome to FocusMate!',
          subtitle: 'Your smart partner to stay focused and beat distractions.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/illustration2.png')} style={{ height: 250, width: 250 }} />,
          title: 'Track. Analyze. Improve.',
          subtitle: 'AI watches your screen time and helps reduce digital clutter.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/illustration3.png')} style={{ height: 250, width: 250 }} />,
          title: 'Earn Rewards for Studying',
          subtitle: 'Gamify your focus. Stay productive and earn badges!',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
