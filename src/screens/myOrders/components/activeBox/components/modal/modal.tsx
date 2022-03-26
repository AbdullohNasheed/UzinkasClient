import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Modal} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ModalBoxProps{
    openModal: boolean
}

const ModalBox = ({openModal= false}: ModalBoxProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Modal visible={openModal}>
      <TouchableOpacity >
        <Text>asdasda</Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalBox;
