import React from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';

/*-------- styles ----------*/
import styles from './styles';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=> props.onBtnPress()}>
      <Text style={styles.btnText}>Add members</Text>
    </TouchableOpacity>
  );
};

export default Button;
