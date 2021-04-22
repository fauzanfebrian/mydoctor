import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor12} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor12} style={styles.avatar} />
      <View>
        <View style={styles.wrapper}>
          <Text style={styles.chat}>
            Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
          </Text>
        </View>
        <Text style={styles.time}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  wrapper: {
    backgroundColor: colors.primary,
    padding: 12,
    paddingRight: 18,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    maxWidth: '80%',
  },
  chat: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  time: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textAlign: 'left',
    marginTop: 8,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
});
