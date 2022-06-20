import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Fonts} from '../Constant';
import {colors, metrics} from '../Theme';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.lightGray,
  },
  titleText: {
    textAlign: 'center',
    fontFamily: Fonts.REGULAR,
    fontSize: moderateScale(18),
    color: colors.textSecondary,
  },
  paragraph: {
    marginVertical: moderateScale(8),
    lineHeight: moderateScale(20),
  },

  buttonText: {
    color: colors.aesthetic,
    fontSize: metrics.font.button,
  },
  navigateButton: {
    padding: moderateScale(20),
    marginTop: moderateScale(10),
    borderStyle: 'solid',
    borderWidth: moderateScale(1),
    borderColor: colors.aesthetic,
  },
});
