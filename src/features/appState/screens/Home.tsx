import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../components/AppHeader';

const Home = () => {
  const nav = useNavigation();

  return (
    <View>
      <AppHeader />
      <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
        This is the Home tab
      </Text>
      <Pressable
        style={{ height: 200, width: 200, backgroundColor: 'red' }}
        onPress={() => alert('lol, theres no drawer anymore')}
      >
        <Text>PRESS ME FOR DRAWER</Text>
      </Pressable>
    </View>
  );
};

export default Home;
