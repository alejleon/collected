import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AppHeader = () => {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View />
      <Text style={styles.heading}>COLLECTED</Text>
      <Pressable
        style={{ borderColor: 'red', borderWidth: 1 }}
        onPress={() => alert('hiya')}
      >
        <Text>MENU</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edd3bb',
    marginHorizontal: 16,
    marginTop: 16,
    // alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 30,
  },
});

export default AppHeader;
