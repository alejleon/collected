import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import HamburgerMenu from '../../../../assets/icons/hamburgerMenu.svg';
import useTheme from '../../../hooks/useTheme';
import { globalStyles } from '../../../styles';
import SideMenuModal from '../modals/SideMenuModal';

const { palette, typography } = globalStyles;

const AppHeader = () => {
  // const nav = useNavigation();
  const { colors } = useTheme();
  const [modalIsActive, setModalIsActive] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ width: 30 }} />
      <Text style={[styles.heading, { color: colors.primary }]}>COLLECTED</Text>
      <Pressable
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => setModalIsActive(true)}
      >
        <HamburgerMenu height={15} width={35} fill={colors.primary} />
      </Pressable>
      <SideMenuModal
        isVisible={modalIsActive}
        setModalIsActive={setModalIsActive}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
    borderColor: 'red',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 30,
    paddingTop: 14,
    fontFamily: typography.RUBIKMONOONE_400,
  },
});

export default AppHeader;
