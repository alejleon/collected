import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import useTheme from '../../../hooks/useTheme';
import { globalStyles } from '../../../styles';

const SideMenuModal = ({ isVisible, setModalIsActive }: SideMenuModalProps) => {
  const theme = useTheme();
  const { spacing } = globalStyles;

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
        <View style={{ marginHorizontal: spacing.STANDARD_EDGE }}>
          <Text></Text>
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
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default SideMenuModal;
