import { Dimensions, Platform, StatusBar } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { moderateScale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

const FACTOR = 0.2;

const metrics = {
  // Text
  font: {
    // -1
    huge: (30, FACTOR),
    header: moderateScale(28, FACTOR),
    smallHeader: moderateScale(26, FACTOR),
    title: moderateScale(24, FACTOR),
    subtitle: moderateScale(22, FACTOR),
    body: moderateScale(20, FACTOR),
    paragraph: moderateScale(18, FACTOR),
    button: moderateScale(16, FACTOR),
    caption: moderateScale(14, FACTOR),
    note: moderateScale(12, FACTOR),
    medium: moderateScale(10, FACTOR),
    small: moderateScale(8, FACTOR),
  },

  // Padding
  // pageHorizontalPadding: moderateScale(16),
  // pageVerticalPadding: moderateScale(8),

  // Border Radius
  buttonRadius: moderateScale(8),

  // Component Size
  defaultComponentSize: moderateScale(40),
  headerHeight: moderateScale(46),
  // Gap
  tinyGap: moderateScale(2),
  smallGap: moderateScale(4), // Smallest Gap should be
  mediumGap: moderateScale(6),
  defaultGap: moderateScale(8), // Default size for an average gap
  bigGap: moderateScale(10), // Big Gap usually for differentiate between sections
  largestGap: moderateScale(12), // No use, probably

  divider: moderateScale(2),
  // Screen Size
  screenWidth: width,
  screenHeight:
    height -
    Platform.select({
      ios: getStatusBarHeight(true),
      android: StatusBar.currentHeight,
    }),
  fullheight: height,
  // ScreenHeight: height,
  splitScreenSmall: width * 0.3,
  splitScreenBig: width * 0.7,
  icon: {
    defaultIconSize: moderateScale(18),
    buttonIconSize: moderateScale(32),
    bigIconSize: moderateScale(28),
    mediumIconSize: moderateScale(20),
    drawerSize: moderateScale(16),
    smalIconSize: moderateScale(12),
    actionIconSize: moderateScale(14),
  },
  image: {
    logo: moderateScale(126),
    avatar: moderateScale(112),
    attachment: moderateScale(88),
    addressPreview: moderateScale(65),
    supportLogo: moderateScale(32),
  },
  copyButton: moderateScale(75),
  invitationBoxHeight: moderateScale(60),
  notificationButton: moderateScale(150),

  restaurantWidth: moderateScale(130),

  panelHeight: moderateScale(155),
  panelWidth: moderateScale(150),

  promotionHeight: moderateScale(155 / 2 - 4),
};

export default metrics;
