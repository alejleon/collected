import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginHorizontal: 16,
          borderColor: 'red',
          borderWidth: 2,
          alignItems: 'center',
        }}
      >
        <Text>AYEEEE what the hell is happening here????</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender',
    // alignItems: "center",
    justifyContent: 'center',
  },
});
