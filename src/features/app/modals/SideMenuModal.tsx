import React from 'react';
import { Text, View, Pressable, StyleSheet, DevSettings } from 'react-native';
import { Switch } from 'react-native-switch';
import Modal from 'react-native-modal';
import useTheme from '../../../hooks/useTheme';
import { globalStyles } from '../../../styles';
import { useBoundStore } from '../../../store';
import Divider from '../components/Divider';

const { spacing, typography, palette } = globalStyles;

const SideMenuModal = ({ isVisible, setModalIsActive }: SideMenuModalProps) => {
  const { colors } = useTheme();
  const {
    isDarkTheme,
    toggleAppTheme,
    setOauthAccessToken,
    setOauthAccessTokenSecret,
    setOauthVerifier,
  } = useBoundStore((state) => state);

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
    >
      <View
        style={{
          ...styles.container,
          backgroundColor: colors.background,
        }}
      >
        <View style={styles.headingContainer}>
          <Text style={{ ...styles.headingText, color: colors.primaryText }}>
            Collected
          </Text>
          <Divider
            color={colors.primary}
            widthPercentage={'92%'}
            style={{ paddingTop: spacing.L }}
          />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.toggleContainer}>
            <Text style={{ ...styles.optionText, color: colors.primaryText }}>
              Dark mode
            </Text>
            <Switch
              value={isDarkTheme}
              onValueChange={toggleAppTheme}
              // barHeight={28}
              circleSize={25}
              circleBorderWidth={0.5}
              renderActiveText={false}
              renderInActiveText={false}
              backgroundActive={palette.RED_ORANGE_DARK}
              circleActiveColor={palette.OFF_WHITE}
            />
          </View>

          <Pressable
            style={styles.optionContainer}
            onPress={() => {
              DevSettings.reload();
              setModalIsActive(false);
            }}
          >
            <Text style={{ ...styles.optionText, color: colors.primaryText }}>
              Reload Javascript
            </Text>
          </Pressable>
          <Pressable
            style={styles.optionContainer}
            onPress={() => {
              setOauthAccessToken('');
              setOauthAccessTokenSecret('');
              setOauthVerifier('');
              setModalIsActive(false);
            }}
          >
            <Text style={{ ...styles.optionText, color: colors.primaryText }}>
              Clear Async Storage
            </Text>
          </Pressable>
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
    paddingHorizontal: spacing.STANDARD_EDGE,
    paddingTop: spacing.M,
  },
  headingText: {
    fontFamily: typography.RUBIKMONOONE_400,
    fontSize: 26,
    marginTop: spacing.M,
  },
  bodyContainer: {
    flex: 1,
    paddingTop: spacing.L,
    paddingHorizontal: spacing.STANDARD_EDGE,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.L,
  },
  optionText: {
    fontFamily: typography.ROBOTO_400,
    fontSize: 18,
    letterSpacing: 2,
  },
});

export default SideMenuModal;
