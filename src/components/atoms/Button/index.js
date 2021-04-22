import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {fonts} from '../../../utils';
import {colors} from '../../../utils/colors';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';

const Button = ({type, title = 'Button', onPress, icon, disable}) => {
  switch (type) {
    case 'icon-only':
      return <IconOnly onPress={onPress} icon={icon} />;
    case 'btn-icon':
      return <BtnIconSend disable={disable} />;
    default:
      return (
        <TouchableOpacity style={styles.wrapper(type)} onPress={onPress}>
          <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
      );
  }
};

export default Button;

const styles = StyleSheet.create({
  wrapper: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontFamily: fonts.primary[600],
    fontSize: 18,
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
});
