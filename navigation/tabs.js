/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../screens';
import {COLORS, FONTS, icons} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const TabsButtons = ({focused, icon, name}) => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        width: 30,
        height: 30,
        tintColor: focused ? COLORS.primary : COLORS.black,
      }}
    />
    <Text
      style={{color: focused ? COLORS.primary : COLORS.black, ...FONTS.body5}}>
      {name}
    </Text>
  </View>
);

const TabBarCustomButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <LinearGradient
      colors={[COLORS.primary, COLORS.secondary]}
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
      }}>
      {children}
    </LinearGradient>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
          height: 100,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabsButtons focused={focused} icon={icons.home} name="Home" />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabsButtons
              focused={focused}
              icon={icons.pie_chart}
              name="Portfolio"
            />
          ),
        }}
        name="Portfolio"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.transaction}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: COLORS.white,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
        name="Transaction"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabsButtons
              focused={focused}
              icon={icons.line_graph}
              name="Prices"
            />
          ),
        }}
        name="Prices"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabsButtons
              focused={focused}
              icon={icons.settings}
              name="Settings"
            />
          ),
        }}
        name="Settings"
        component={Home}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Tabs;
