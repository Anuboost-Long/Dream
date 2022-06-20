import React from 'react';
import {Platform, View} from 'react-native';
import {metrics} from '../Theme';
import colorScheme from '../Theme/colors';
import SizedBox from './SpacingComponent/SizeBox';
import {RegularText} from './TextRelate/RegularText';

const CustomTabItem = ({icon, label, focused = false}) => {
  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
      {icon}
      <SizedBox height={metrics.bigGap} />
      <RegularText
        style={{
          marginTop: Platform.OS === 'android' ? -10 : 0,
        }}
        color={focused ? colorScheme.primary : 'black'}
        fontSize={metrics.font.medium}
        numberOfLines={1}>
        {label}
      </RegularText>
    </View>
  );
};

export default CustomTabItem;
