import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser, ICRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, desc, isRemove}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image source={DummyUser} style={styles.avatar} />
        {isRemove && <ICRemovePhoto style={styles.icon} />}
      </View>
      {name && <Text style={styles.name}>{name}</Text>}
      {desc && <Text style={styles.desc}>{desc}</Text>}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  avatarWrapper: {
    borderColor: colors.border,
    borderWidth: 1,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: colors.text.primary,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 2,
  },
  desc: {
    color: colors.text.secondary,
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
  },
  icon: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
});
