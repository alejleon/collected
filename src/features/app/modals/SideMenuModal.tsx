import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Switch } from 'react-native-switch';
import Modal from 'react-native-modal';
import useTheme from '../../../hooks/useTheme';
import { globalStyles } from '../../../styles';
import { useBoundStore } from '../../../store';

const { spacing, typography, palette } = globalStyles;

const SideMenuModal = ({ isVisible, setModalIsActive }: SideMenuModalProps) => {
  const { colors } = useTheme();
  const { isDarkTheme, toggleAppTheme } = useBoundStore((state) => state);

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
      style={styles.modalContainer}
      // animationInTiming={300}
      // animationOutTiming={300}
      // backdropTransitionInTiming={300}
      // backdropTransitionOutTiming={300}
      // coverScreen={true}
      // backdropOpacity={0.7}
      // panResponderThreshold={4}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
        <View
          style={[
            styles.headingContainer,
            { backgroundColor: colors.secondary },
          ]}
        >
          <Text style={[styles.headingText, { color: colors.primary }]}>
            Collected
          </Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.toggleContainer}>
            <Text style={styles.optionText}>Dark mode</Text>
            <Switch
              value={isDarkTheme}
              onValueChange={toggleAppTheme}
              // barHeight={28}
              circleSize={25}
              circleBorderWidth={0.5}
              renderActiveText={false}
              renderInActiveText={false}
              backgroundActive={'#595959'}
              circleActiveColor={palette.RED_ORANGE}
              // switchLeftPx={2}
              // switchRightPx={2}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

type SideMenuModalProps = {
  isVisible: boolean;
  setModalIsActive: (arg: boolean) => void;
};

const styles = StyleSheet.create({
  modalContainer: {
    marginHorizontal: 0,
    marginVertical: 0,
    height: '100%',
  },
  container: {
    height: '100%',
    width: '70%',
    alignSelf: 'flex-end',
  },
  headingContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: spacing.MARGIN_EDGE,
    // backgroundColor: palette.LIGHT_GRAY,
    // backgroundColor: palette.LIGHT_GRAY,
    paddingVertical: spacing.MARGIN_BOTTOM_M,
  },
  headingText: {
    fontFamily: typography.RUBIKMONOONE_400,
    fontSize: 26,
  },
  bodyContainer: {
    flex: 1,
    paddingTop: spacing.M,
    // borderColor: 'red',
    // borderWidth: 2,
    paddingHorizontal: spacing.MARGIN_EDGE,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {
    fontFamily: typography.INTER_900,
  },
});

export default SideMenuModal;
