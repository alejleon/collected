import React from 'react';
import { Text, View, Button } from 'react-native';
import Modal from 'react-native-modal';

const SideMenuModal = ({ isVisible, setModalIsActive }: SideMenuModalProps) => {
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
      // deviceHeight={'100%'}
      style={{
        borderColor: 'red',
        borderWidth: 2,
        marginHorizontal: 0,
        marginVertical: 0,
        // top: '-8%',
        // right: '-8%',
        // position: 'absolute',
        height: '100%',
      }}
    >
      <View
        style={{
          backgroundColor: '#f5f5f5',
          // position: 'absolute',
          // right: 0,
          height: '100%',
          width: '70%',
          alignSelf: 'flex-end',
        }}
      >
        <Text>Howdy pardner</Text>
        <Button
          title={'close Modal thnx'}
          onPress={() => setModalIsActive(false)}
        />
      </View>
    </Modal>
  );
};

type SideMenuModalProps = {
  isVisible: boolean;
  setModalIsActive: (arg: boolean) => void;
};

export default SideMenuModal;
