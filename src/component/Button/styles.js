import { StyleSheet } from 'react-native';
import { getFontStyle, getScaleSize, colors } from '../../utils';

/*--------  define your styles ----------*/
export default StyleSheet.create({
  container: {
    backgroundColor: '#940000',
    width: '60%',
    height: getScaleSize(40),
    alignSelf: 'center',
    marginTop: getScaleSize(12),
    borderRadius: getScaleSize(20),
    justifyContent: 'center'
  },
  btnText:{
    fontSize: getScaleSize(16),
    color: colors.primary,
    alignSelf: 'center'
  }
});
