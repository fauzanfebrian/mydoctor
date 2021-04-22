import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DummyDoctor7,
  DummyDoctor8,
  DummyDoctor9,
  DummyDoctor10,
  DummyDoctor11,
} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <List
        name="Alexander Janie"
        desc="Wanita"
        profile={DummyDoctor7}
        type="next"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        name="John McParker Steve"
        desc="Pria"
        profile={DummyDoctor8}
        type="next"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        name="Nairobi Putri Hayza"
        desc="Wanita"
        profile={DummyDoctor9}
        type="next"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        name="James Rivillia"
        desc="Pria"
        profile={DummyDoctor10}
        type="next"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        name="Liu Yue Tian Park"
        desc="Wanita"
        profile={DummyDoctor11}
        type="next"
        onPress={() => navigation.navigate('Chatting')}
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
