import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, DevSettings } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoadingScreen from './features/loadingScreen/LoadingScreen';
import AppHeader from './components/AppHeader';

export default function App() {
  const nothing = '';

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        style="dark"
        animated={true}
        translucent={true}
        // backgroundColor="#29292988"
      />
      <LoadingScreen />
      <AppHeader />

      {/* <View
        style={{
          // flex: 1,
          // marginHorizontal: 16,
          borderColor: 'blue',
          borderWidth: 2,
          alignItems: 'center',
          backgroundColor: '#FFFFFF88',
        }}
      >
        <Text
          style={{
            marginBottom: 100,
            marginHorizontal: 16,
            fontFamily: 'PressStart2P_400Regular',
            fontSize: 30,
            alignSelf: 'flex-end',
          }}
        >
          Collected
        </Text>
        <Button title={'reload stuff'} onPress={() => DevSettings.reload()} />
      </View> */}
    </SafeAreaView>
  );
}

// '#fcba03' // yellow
// #C72104 // red/orange
// #42a4f5  // electric blue

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edd3bb',
    // alignItems: "center",
    // justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 2,
  },
});
