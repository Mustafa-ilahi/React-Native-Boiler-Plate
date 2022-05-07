import {sizes, colors, fontSize, fontFamily} from '../../services';
const {StyleSheet} = require('react-native');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {position: 'relative'},
  header: {position: 'absolute'},
  map: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  logo: {
    zIndex: 2,
    height: sizes.images.large,
    width: sizes.images.large,
    backgroundColor: colors.snow,
    borderRadius: sizes.buttonRadius,
    left: sizes.doubleBaseMargin * 6.5,
    top: sizes.baseMargin,
  },

  headerIcon: {
      backgroundColor: 'red',
      zIndex: 2,
      height: sizes.images.large,
      width: sizes.images.large,
      borderRadius: sizes.buttonRadius,
      left: sizes.doubleBaseMargin * 6.5,
      top: sizes.baseMargin,
  },
  hamberg: {
    left: sizes.baseMargin * 1.5,
    top: sizes.baseMargin * 1.7,
  },
  selectedPartnerCard: {
    margin: sizes.TinyMargin * 1.5,
    paddingTop: sizes.TinyMargin * 2.5,
    height: sizes.screenHeight * 0.34,
    width: sizes.screenWidth * 0.7,
    backgroundColor: colors.snow,
    borderRadius: sizes.screenWidth * 0.02,
    shadowOffset: {
      width: 0,
      height: sizes.TinyMargin,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 10,
  },
  selectedPartnerCard2: {
    margin: sizes.TinyMargin * 1.5,
    height: sizes.screenHeight * 0.1,
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.snow,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.02,
    shadowOffset: {
      width: 0,
      height: sizes.TinyMargin,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 10,
  },
  selectedPartnerImg: {
    height: sizes.screenHeight * 0.12,
    width: sizes.screenWidth * 0.63,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.02,
  },
  selectedPartnerText: {
    fontSize: fontSize.medium,
    paddingLeft: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.02,
    fontWeight: 'bold',
    color: colors.black,
    width: 200,
    height: 42,
  },
  selectedPartnerText2: {
    fontSize: fontSize.h6,
    paddingTop: sizes.screenWidth * 0.02,
    fontWeight: 'bold',
    color: '#F08080',
  },
  ratingText: {
    fontSize: fontSize.medium,
    color: colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dollar: {
    color: colors.appBgColor2,
  },
  cardImg: {
    height: sizes.icons.medium,
    width: sizes.icons.medium,
  },
  bold: {
    fontWeight: 'bold',
  },
  divider: {
    borderBottomColor: colors.appTextColor4,
    borderBottomWidth: 0.5,
  },
  locationView: {
    marginTop: sizes.screenHeight * 0.01,
    padding: sizes.TinyMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  row: {flexDirection: 'row'},
  bookNowBtn: {
    backgroundColor: colors.appBgColor2,
    paddingTop: sizes.TinyMargin,
    paddingBottom: sizes.TinyMargin,
    paddingLeft: sizes.TinyMargin * 2,
    paddingRight: sizes.TinyMargin * 2,
    borderRadius: sizes.screenWidth * 0.02,
  },
  bookNowText: {
    color: colors.snow,
  },
  ratingCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: sizes.TinyMargin * 2,
  },

  markerBg: {
    height: 65,
    width: 60,
    borderWidth: 2,
  },

  markerIcon: {
    position: 'absolute',
    top: sizes.screenHeight * 0.032,
    left: sizes.screenWidth * 0.065,
  },
  markerIconSize: {
    height: sizes.TinyMargin,
    width: sizes.TinyMargin,
  },
  categoryName: {width: 50},
});
