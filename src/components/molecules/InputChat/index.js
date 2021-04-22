import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tulis pesan untuk Nairobi"
        placeholderTextColor={colors.text.placeHolder}
      />
      <Button type="btn-icon" />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    color: colors.text.primary,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    flex: 1,
    marginRight: 10,
    maxHeight: 45,
  },
  container: {
    padding: 16,
    flexDirection: 'row',
  },
});
