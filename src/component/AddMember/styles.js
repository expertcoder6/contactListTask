import { StyleSheet } from 'react-native';
import { getFontStyle, getScaleSize, colors } from '../../utils';

/*--------  define your styles ----------*/
export default StyleSheet.create({
  modalView:{
    height: getScaleSize(250),
    width: '100%',
    alignSelf: 'center',
    borderRadius: getScaleSize(10),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    paddingHorizontal: getScaleSize(20)
  },
  button: {
    backgroundColor: '#940000',
    width: '60%',
    height: getScaleSize(40),
    alignSelf: 'center',
    marginTop: getScaleSize(30),
    borderRadius: getScaleSize(20),
    justifyContent: 'center'
  },
  btnText:{
    fontSize: getScaleSize(16),
    color: colors.primary,
    alignSelf: 'center'
  },
  inputField:{
    height: getScaleSize(40),
    width: '100%',
    borderRadius: getScaleSize(20),
    borderWidth: 1,
    paddingHorizontal: getScaleSize(10),
    marginTop: getScaleSize(15)
  }
});
