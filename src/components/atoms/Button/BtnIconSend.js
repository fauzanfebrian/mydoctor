import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ICSendDark, ICSendLight} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({disable, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      {disable ? <ICSendDark /> : <ICSendLight />}
    </TouchableOpacity>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingRight: 3,
    paddingTop: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
