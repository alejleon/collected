import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>COLLECTED</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edd3bb',
    marginHorizontal: 16,
    marginTop: 16,
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
  },
  heading: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 30,
  },
});

export default AppHeader;
