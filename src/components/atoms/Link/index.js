import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const Link = ({size = 12, title, align = 'left', onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: (fontSize, textAlign) => ({
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    fontSize,
    textDecorationLine: 'underline',
    textAlign,
  }),
});
