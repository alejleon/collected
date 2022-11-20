import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import LoadingScreen from './features/loadingScreen/LoadingScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LoadingScreen />
      <View
        style={{
          marginHorizontal: 16,
          borderColor: 'red',
          borderWidth: 2,
          alignItems: 'center',
        }}
      >
        <Text>AYEEEE what the hell is happening here????</Text>

        {/* <Button
          title={'isPalindrome????'}
          onPress={() => {
            const result = isPalindrome(12321);
             console.log('RESULTTTT', result, '\n');
          }}
        /> */}
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
