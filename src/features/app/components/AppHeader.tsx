import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import HamburgerMenu from '../../../../assets/icons/hamburgerMenu.svg';
import useTheme from '../../../hooks/useTheme';
import { globalStyles } from '../../../styles';
import SideMenuModal from '../modals/SideMenuModal';

const { typography, spacing } = globalStyles;

const AppHeader = () => {
  // const nav = useNavigation();
  const { colors } = useTheme();
  const [modalIsActive, setModalIsActive] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: colors.banner }]}>
      <View style={{ width: 30 }} />
      <Text style={[styles.heading, { color: colors.primaryText }]}>
        COLLECTED
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
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.EDGE_SPACING,
    paddingVertical: spacing.EDGE_SPACING,
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
