import React from 'react';
import {View, Text, Image} from 'react-native';

import {COLORS, SIZES, FONTS} from '../constants';
const CurrencyLabel = ({icon, code, currency}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={icon}
        resizeMode="cover"
        style={{width: 25, height: 25, marginTop: 5}}
      />
      <View style={{marginLeft: SIZES.base}}>
        <Text style={{...FONTS.h3}}>{currency}</Text>
        <Text style={{...FONTS.body4, color: COLORS.gray}}>{code}</Text>
      </View>
    </View>
  );
};

export default CurrencyLabel;
