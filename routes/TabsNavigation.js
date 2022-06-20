import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {moderateScale} from 'react-native-size-matters';
import HomeScreen from '../src/Screens/HomeScreen';
import CustomTabItem from '../src/Components/CustomTabItem';
import {colors, metrics} from '../src/Theme';
import {Fonts} from '../src/Constant';
import {IconAssets} from '../src/assets';

const TabsNavigate = createBottomTabNavigator();

export default function BottomTabsNavigation() {
  const iconWidth = React.useMemo(() => (Platform.OS === 'ios' ? 30 : 20), []);

  return (
    <TabsNavigate.Navigator
      screenOptions={{
        tabBarStyle: {height: moderateScale(55)},
        tabBarShowLabel: false,
        headerTintColor: colors.sandPaper,
        headerBackTitleStyle: {
          fontSize: metrics.font.note,
          fontFamily: Fonts.LIGHT,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: Fonts.BOLD,
          color: 'white',
          fontSize: metrics.font.paragraph,
        },
        headerStyle: {
          backgroundColor: colors.aesthetic,
          height: moderateScale(60),
        },
      }}>
      <TabsNavigate.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <CustomTabItem
                focused={focused}
                width={iconWidth}
                icon={
                  <IconAssets.HomeIcon
                    width={iconWidth}
                    stroke={focused ? colors.aesthetic : colors.veryLightGray}
                  />
                }
                height={40}
                label="Home"
              />
            );
          },
        }}
      />
      {/* <TabsNavigate.Screen
        name="My Review"
        component={MyReview}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <CustomTabItem
                focused={focused}
                width={iconWidth}
                icon={
                  <IconAssets.Page
                    width={iconWidth}
                    height={40}
                    stroke={focused ? colors.aesthetic : colors.veryLightGray}
                  />
                }
                height={40}
                label="My Review"
              />
            );
          },
        }}
      />
      <TabsNavigate.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <CustomTabItem
                focused={focused}
                width={iconWidth}
                icon={
                  <IconAssets.Setting
                    width={iconWidth}
                    height={40}
                    stroke={focused ? colors.aesthetic : colors.veryLightGray}
                  />
                }
                height={40}
                label="Setting"
              />
            );
          },
        }}
      /> */}
    </TabsNavigate.Navigator>
  );
}
