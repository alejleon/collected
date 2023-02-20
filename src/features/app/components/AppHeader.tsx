import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import HamburgerMenu from '../../../../assets/icons/hamburgerMenu.svg';
import useTheme from '../../../hooks/useTheme';
import { globalStyles } from '../../../styles';
import SideMenuModal from '../modals/SideMenuModal';
import LogoC from '../../../../assets/logoC.svg';
import Divider from './Divider';

const { typography, spacing } = globalStyles;

const AppHeader = () => {
  // const nav = useNavigation();
  const { colors } = useTheme();
  const [modalIsActive, setModalIsActive] = useState(false);

  return (
    <>
      <View style={[styles.container, {}]}>
        <View style={{ width: 30 }} />
        <LogoC
          height={36}
          width={30}
          fill={colors.primaryText}
          style={{ marginRight: -34, marginBottom: 3 }}
        />
        <Text style={[styles.heading, { color: colors.primaryText }]}>
          OLLECTED
        </Text>
        <Pressable
          style={styles.menuButton}
          onPress={() => setModalIsActive(true)}
        >
          <HamburgerMenu height={15} width={35} fill={colors.primaryText} />
        </Pressable>
        <SideMenuModal
          isVisible={modalIsActive}
          setModalIsActive={setModalIsActive}
        />
      </View>
      <Divider widthPercentage="92%" color={colors.primary} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.STANDARD_EDGE,
    paddingBottom: spacing.L,
    paddingTop: spacing.L,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 30,
    fontFamily: typography.RUBIKMONOONE_400,
  },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppHeader;
