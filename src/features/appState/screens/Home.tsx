import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../components/AppHeader';

const Home = () => {
  const nav = useNavigation();

  return (
    <View style={{ borderColor: 'red', borderWidth: 2 }}>
      <AppHeader />
      <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
        This is the Home tab
      </Text>
      {/* <Pressable
        style={{ height: 200, width: 200, backgroundColor: 'red' }}
        onPress={() => alert('lol, theres no drawer anymore')}
      >
        <Text>PRESS ME FOR DRAWER</Text>
      </Pressable> */}

      {/* <SvgIcon src={Send} /> */}
      {/* <MenuIcon height={500} width={500} scale={0.5} /> */}
    </View>
  );
};

export default Home;
