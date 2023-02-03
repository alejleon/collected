import React, { useEffect } from 'react';
import { View, Text, Button, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../components/AppHeader';
import AppStore from '../appState';
import useStore from 'zustand';
import useAppStore from '../appState';

const Home = () => {
  const nav = useNavigation();

  // useEffect(() => {
  //   console.log('loaded HOME');
  // }, []);

  const results = AppStore((state) => state.appTheme);
  // const { appTheme } = useStore(state);

  console.log('STATE', results);

  return (
    <View style={styles.container}>
      <AppHeader />
      <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
        This is the Home tab
      </Text>
      <Button onPress={() => alert('pressed')} title={'helloo'} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default Home;
