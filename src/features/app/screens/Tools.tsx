import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '../../../hooks/useTheme';
import AppHeader from '../components/AppHeader';

const Tools: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={{ backgroundColor: colors.background, ...styles.container }}>
      <AppHeader />
      <View style={styles.contentContainer}>
        <Text>SETTTINNGGGSS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

export default Tools;
