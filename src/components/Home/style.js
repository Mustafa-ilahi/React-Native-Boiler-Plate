import {sizes, colors, fontSize, fontFamily} from '../../services';
const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {position: 'relative'},
  image: {
    justifyContent: 'center',
    height: sizes.screenHeight / 1.5,
    width: sizes.screenWidth,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  whereDropDownView: {bottom: sizes.screenWidth * 0.98},
  searchIcon: {
    height: sizes.icons.medium,
    width: sizes.icons.medium,
  },
  searchIconView: {marginLeft: sizes.screenHeight * 0.01},
  logoContainer: {position: 'absolute'},
  logo: {
    height: sizes.images.large,
    width: sizes.images.large,
    backgroundColor: colors.snow,
    borderRadius: sizes.buttonRadius,
    left: sizes.baseMargin * 1.8,
    top: sizes.baseMargin,
  },
  hamberg: {
    left: sizes.baseMargin * 1.5,
    top: sizes.baseMargin * 1.7,
  },
  headerView: {
    paddingTop: sizes.doubleBaseMargin,
    paddingLeft: sizes.screenWidth * 0.1,
  },
  headerText: {
    fontSize: fontSize.h3,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.snow,
    textShadowColor: colors.black,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: sizes.TinyMargin,
  },
  searchText: {
    fontSize: fontSize.h6,
    textAlign: 'center',
    paddingTop: sizes.baseMargin,
    color: colors.snow,
    textShadowColor: colors.black,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: sizes.TinyMargin,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: sizes.doubleBaseMargin,
    // zIndex: 0,
  },
  card: {
    zIndex: 2,
    margin: sizes.TinyMargin,
    justifyContent: 'center',
    height: sizes.screenHeight * 0.18,
    width: sizes.screenWidth * 0.39,
    backgroundColor: colors.appBgColor2,
    borderRadius: sizes.cardRadius,
    shadowOffset: {
      width: 0,
      height: sizes.TinyMargin,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },

  cardText: {
    fontSize: fontSize.medium,
    color: colors.snow,
    textAlign: 'center',
  },

  container: {
    padding: sizes.baseMargin,
  },

  section: {
    marginBottom: sizes.baseMargin,
  },
  whatDropDown: {zIndex: 9, marginTop: sizes.TinyMargin},
  whereDropDown: {
    position: 'absolute',
    top: sizes.doubleBaseMargin * 4.9,
    left: sizes.baseMargin * 2.2,
    zIndex: 1,
    marginTop: sizes.TinyMargin,
  },
  categoryIcon: {justifyContent: 'center', alignSelf: 'center'},
  CTAView: {
    marginTop: sizes.doubleBaseMargin,
    alignItems: 'center',
    marginBottom: sizes.baseMargin,
  },
  CTAHeading: {
    fontSize: fontSize.h5,
    fontWeight: 'bold',
    color: colors.black,
  },
  CTACard: {
    marginTop: sizes.baseMargin,
    height: sizes.screenHeight * 0.3,
    width: sizes.screenWidth * 0.8,
    position: 'relative',
    borderRadius: sizes.cardRadius,
    shadowOffset: {
      width: 0,
      height: sizes.TinyMargin,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  ctaImage: {
    height: sizes.screenHeight * 0.3,
    width: sizes.screenWidth * 0.8,
    borderRadius: sizes.cardRadius,
  },
  ctaContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  ctaText: {
    fontSize: fontSize.h3,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.snow,
  },
  selectedPartnerView: {
    marginTop: sizes.TinyMargin,
    alignItems: 'center',
  },
  ratingCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: sizes.TinyMargin * 2,
  },
  searchView: {
    position: 'absolute',
    backgroundColor: colors.appBgColor2,
    borderRadius: sizes.TinyMargin,
    marginTop: sizes.doubleBaseMargin * 1.3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: sizes.smallMargin * 1,
    width: sizes.screenWidth * 0.8,
  },
  selectedPartnerCard: {
    marginTop: sizes.baseMargin,
    height: sizes.screenHeight * 0.49,
    width: sizes.screenWidth * 0.8,
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
  selectedPartnerImg: {
    height: sizes.screenHeight * 0.3,
    width: sizes.screenWidth * 0.8,
    borderTopLeftRadius: sizes.screenWidth * 0.02,
    borderTopRightRadius: sizes.screenWidth * 0.02,
  },
  selectedPartnerText: {
    fontSize: fontSize.medium,
    paddingLeft: sizes.screenWidth * 0.02,
    paddingTop: sizes.screenWidth * 0.02,
    fontWeight: 'bold',
    color: colors.black,
    width: 300,
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
    borderRadius: sizes.TinyMargin,
  },
  bookNowText: {
    color: colors.snow,
  },

  svgIcon: {paddingLeft: sizes.doubleBaseMargin},
  categoryName: {width: 50},
  address: {alignSelf: 'center'},
});
