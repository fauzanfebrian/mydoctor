import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyNews1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.news}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.time}>Today</Text>
      </View>
      <Image source={DummyNews1} style={styles.image} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
  container: {
    flexDirection: 'row',
    paddingBottom: 12,
    paddingTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingHorizontal: 16,
  },
  textWrapper: {flex: 1},
  news: {
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    fontSize: 16,
    marginBottom: 4,
    maxWidth: '90%',
  },
  time: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    fontSize: 12,
  },
});
