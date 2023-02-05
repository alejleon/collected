import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import HamburgerMenu from '../../../../assets/icons/hamburgerMenu.svg';

const AppHeader = () => {
  // const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ width: 30 }} />
      <Text style={styles.heading}>COLLECTED</Text>
      <Pressable
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => alert('hiya')}
      >
        <HamburgerMenu height={15} width={35} fill={'#292929'} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edd3bb',
    marginHorizontal: 16,
    marginTop: 16,
    borderColor: 'red',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 30,
    paddingTop: 14,
    color: 'red',
  },
});

export default AppHeader;
