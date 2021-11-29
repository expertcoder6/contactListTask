import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  TextInput,
  View
} from 'react-native';

/*-------- librery ----------*/
import Modal from "react-native-modal";

/*-------- styles ----------*/
import styles from './styles';

const AddMember = (props) => {
  const [name, setName] = useState('');
  const [phoneNumber, setNumber] = useState('');

  const onAddClick = () =>{
    setName('');
    setNumber('');
    const data = {name: name, phoneNumber: phoneNumber};
    props.onAdd(data);
  }

  return (
    <Modal isVisible={props.isModalVisible}>
      <View style={styles.modalView}>
        <TextInput placeholder={'Enter name'} onChangeText={(value)=> setName(value)} value={name} style={styles.inputField}/>
        <TextInput placeholder={'Enter number'} onChangeText={(value)=> setNumber(value)} value={phoneNumber} style={styles.inputField}/>
        <TouchableOpacity style={styles.button} onPress={()=> onAddClick()}>
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default AddMember;
