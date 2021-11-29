import { StyleSheet } from 'react-native';
import { getFontStyle, getScaleSize, colors } from '../../utils';

/*--------  define your styles ----------*/
export default StyleSheet.create({
  container: {
    padding: getScaleSize(15),
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 5,
    backgroundColor: colors.primary,
    width: '90%',
    alignSelf: 'center',
    marginTop: getScaleSize(12),
    borderRadius: getScaleSize(5)
  },
  phoneIcon:{
    height: getScaleSize(15),
    width: getScaleSize(15),
    alignSelf: 'center'
  },
  gradientView:{
    height: getScaleSize(40),
    width: getScaleSize(40),
    borderRadius: getScaleSize(20),
    justifyContent: 'center',
    marginRight: getScaleSize(10)
  },
  topHorizontalView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  horizontalView:{
    flexDirection: 'row'
  },
  infoIcon:{
    height: getScaleSize(30),
    width: getScaleSize(30),
    alignSelf: 'center'
  },
  deleteIcon:{
    height: getScaleSize(25),
    width: getScaleSize(25),
    alignSelf: 'center'
  },
  nameText:{
    fontSize: getScaleSize(16),
    color: '#940000',
    alignSelf: 'center',
    fontWeight: '600'
  },
  titleText:{
    fontSize: getScaleSize(16),
    color: colors.secondary,
    fontWeight: '600',
    marginBottom: getScaleSize(8)
  },
  numberText:{
    fontSize: getScaleSize(14),
    color: colors.secondary,
    alignSelf: 'center',
    marginLeft: getScaleSize(5)
  }
});
