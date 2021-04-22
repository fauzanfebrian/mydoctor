import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils/colors';

const Register = ({navigation}) => {
  return (
    <View style={styles.outerWrapper}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.wrapper}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email Addres" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  wrapper: {
    padding: 40,
    paddingTop: 0,
  },
  outerWrapper: {backgroundColor: colors.white, flex: 1},
});
