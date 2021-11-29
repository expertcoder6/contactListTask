import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

/*-------- librery ----------*/
import LinearGradient from 'react-native-linear-gradient';

/*-------- styles ----------*/
import styles from './styles';

/*-------- assets ----------*/
import PhoneIcon from '../../assets/icons/phone-call.png';
import DeleteIcon from '../../assets/icons/delete.png';

const CardView = (props) => {
  const temp_data = props.data;
  return (
    <View style={styles.container} key={props.key}>
      <View style={styles.topHorizontalView}>
        <View style={styles.horizontalView}>
          <LinearGradient colors={['#fcf2f8', '#fccae6']} style={styles.gradientView}>
            <Text style={styles.nameText}>{temp_data.name.match(/(^\S\S?|\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()}</Text>
          </LinearGradient>
          <View>
            <Text style={styles.titleText}>{temp_data.name}</Text>
            <View style={styles.horizontalView}>
              <Image source={PhoneIcon} style={styles.phoneIcon}/>
              <Text style={styles.numberText}>{temp_data.phoneNumber}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={{alignSelf: 'center'}} onPress={()=> props.onDelete(props.index)} activeOpacity={0.8}>
          <Image source={DeleteIcon} style={styles.deleteIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardView;
