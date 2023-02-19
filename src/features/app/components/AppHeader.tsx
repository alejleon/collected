import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import HamburgerMenu from '../../../../assets/icons/hamburgerMenu.svg';
import useTheme from '../../../hooks/useTheme';
import { globalStyles } from '../../../styles';
import palette from '../../../styles/palette';
import SideMenuModal from '../modals/SideMenuModal';
import LogoC from '../../../../assets/logoC.svg';

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
      <View style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.STANDARD_EDGE,
    paddingVertical: spacing.STANDARD_EDGE,
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
  divider: {
    marginHorizontal: spacing.XL,
    borderBottomColor: palette.RED_ORANGE,
    borderBottomWidth: 1,
  },
});

export default AppHeader;
