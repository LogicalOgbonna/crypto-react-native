import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView} from 'react-native';
import {
  CurrencyLabel,
  HeaderBar,
  TextButton,
  TransactionHistory,
} from '../components';
import {COLORS, FONTS, SIZES} from '../constants';

const Transaction = ({
  route: {
    params: {currency},
  },
}) => {
  const RenderTrade = () => {
    return (
      <View
        style={{
          padding: SIZES.padding,
          backgroundColor: COLORS.white,
          marginHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
        }}>
        <View style={{flex: 1}}>
          <CurrencyLabel
            icon={currency.image}
            currency={currency.currency}
            code={currency.code}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            padding: SIZES.padding,
            marginBottom: SIZES.radius,
          }}>
          <Text style={{...FONTS.h2, color: COLORS.black}}>
            {currency.wallet.crypto} {currency.code}
          </Text>
          <Text style={{...FONTS.body3, color: COLORS.gray}}>
            ${currency.wallet.value}
          </Text>
        </View>
        <View>
          <TextButton label="Trade" onPress={() => console.log(currency)} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightGray}}>
      <HeaderBar />
      <ScrollView>
        <RenderTrade />
        <TransactionHistory
          history={currency.transactionHistory}
          customContainerStyle={{
            marginHorizontal: SIZES.radius,
            marginBottom: SIZES.padding,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default Transaction;
