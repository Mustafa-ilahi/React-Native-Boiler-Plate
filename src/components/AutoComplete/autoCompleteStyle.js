import {sizes, colors, fontSize, fontFamily} from '../../services';
const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {
    maxHeight: sizes.screenHeight * 0.28,
  },
  inputField: {
    backgroundColor: colors.snow,
    backgroundColor: colors.snow,
    width: sizes.screenWidth * 0.8,
    height: sizes.screenHeight * 0.065,
    fontSize: fontSize.large,
  },
  flatList: {
    backgroundColor: colors.snow,
    width: '100%',
  },
  flatListView: {backgroundColor: colors.snow, width: '80%'},
  item: {
    height: sizes.doubleBaseMargin * 1.35,
    paddingTop: sizes.baseMargin * 0.5,
    paddingBottom: sizes.baseMargin * 0.5,
    zIndex: 99,
  },
  rowText: {
    color: colors.black,
    fontSize: fontSize.large,
    marginStart: sizes.TinyMargin,
  },
  svgIcon: {paddingLeft: sizes.doubleBaseMargin},
  imgIcon: {
    height: sizes.icons.large,
    width: sizes.icons.large,
    marginLeft: sizes.TinyMargin * 2,
  },
});
