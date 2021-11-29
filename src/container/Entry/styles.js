import { StyleSheet } from 'react-native';
import { getFontStyle, getScaleSize, ScreenHeight } from '../../utils';

/*--------  define your styles ----------*/
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: getScaleSize(20)
  },
  memberIcon: {
    height: getScaleSize(20),
    width: getScaleSize(20),
    alignSelf: 'center'
  },
  topHorizontalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginBottom: getScaleSize(10)
  },
  horizontalView:{
    flexDirection: 'row'
  },
  infoIcon:{
    height: getScaleSize(30),
    width: getScaleSize(30),
    alignSelf: 'center'
  },
  titleText:{
    fontSize: getScaleSize(18),
    marginLeft: getScaleSize(5),
    alignSelf: 'center',
    fontWeight: '500'
  },
  cardMainView:{
    height: ScreenHeight-200
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
