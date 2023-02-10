import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import useTheme from '../../../hooks/useTheme';
import { globalStyles } from '../../../styles';

const { spacing, typography } = globalStyles;

const SideMenuModal = ({ isVisible, setModalIsActive }: SideMenuModalProps) => {
  const theme = useTheme();

  return (
    <Modal
      isVisible={isVisible}
      animationIn={'slideInRight'}
      animationOut={'slideOutRight'}
      onBackdropPress={() => setModalIsActive(false)}
      onBackButtonPress={() => setModalIsActive(false)}
      onSwipeComplete={() => setModalIsActive(false)}
      swipeDirection={['right']}
      swipeThreshold={30}
      style={{
        marginHorizontal: 0,
        marginVertical: 0,
        height: '100%',
      }}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.colors.background,
          },
        ]}
      >
        <View
          style={[
            styles.headingContainer,
            { paddingHorizontal: spacing.STANDARD_EDGE },
          ]}
        >
          <Text style={[styles.headingText, { color: theme.colors.primary }]}>
            Collected
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'pink' }} />
      </View>
    </Modal>
  );
};

type SideMenuModalProps = {
  isVisible: boolean;
  setModalIsActive: (arg: boolean) => void;
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '70%',
    alignSelf: 'flex-end',
    paddingVertical: 16,
    // paddingHorizontal: GLOBALSTYLES.SPACING.STANDARD_EDGE,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  headingContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    // borderColor: 'blue',
    // borderWidth: 2,
    paddingBottom: 16,
  },
  headingText: {
    fontFamily: typography.RUBIKMONOONE_400,
    fontSize: 26,
  },
});

export default SideMenuModal;
