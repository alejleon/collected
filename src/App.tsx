import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, DevSettings } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <View
        style={{
          // flex: 1,
          // marginHorizontal: 16,
          borderColor: 'blue',
          borderWidth: 2,
          alignItems: 'center',
          backgroundColor: '#FFFFFF88',
        }}
      >
        <Text style={{ marginBottom: 100 }}>
          AYEEEE what the hell is happening here????
        </Text>
        <Button title={'reload stuff'} onPress={() => DevSettings.reload()} />
      </View>
    </SafeAreaView>
  );
}

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
