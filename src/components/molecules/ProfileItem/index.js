import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ProfileItem = ({label, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  label: {
    color: colors.text.secondary,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
  },
  value: {
    color: colors.text.primary,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    marginTop: 6,
  },
});
