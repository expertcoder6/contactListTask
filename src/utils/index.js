import { Dimensions } from 'react-native';

/* ------------- Dimensions ------------- */
const ScreenHeight = Math.round(Dimensions.get('window').height);
const ScreenWidth = Math.round(Dimensions.get('window').width);

const colors = {
  primary: "#FFFFFF",
  secondary: "#000000",
};


/*--------- responsive  ------------*/
const scalingFactor = Math.min(ScreenWidth, ScreenHeight) / 375;

const getScaleSize = (multi) =>
  multi ? scalingFactor * multi : scalingFactor;

/*--------- fontfamily  ------------*/
const getFontStyle = (langauge) => ({
  bold: 'Bold',
  semibold: 'SemiBold',
  medium: 'Medium',
  gegular: 'Regular',
  light: 'Light', 
  extraLight: 'ExtraLight'
});

/*-------- all exports  --------*/
export { ScreenHeight, ScreenWidth, colors, getFontStyle, getScaleSize };
