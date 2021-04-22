import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyUser} from '../../assets';
import {Gap, Header, List, Profile} from '../../components';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile
        name="Shayna Melinda"
        desc="Product Designer"
        avatar={DummyUser}
      />
      <Gap height={14} />
      <List
        type="next"
        name="Edit Profile"
        desc="Last updated yesterday"
        icon="profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        type="next"
        name="Language"
        desc="Available 12 languages"
        icon="language"
      />
      <List
        type="next"
        name="Give Us Rate"
        desc="On google play store"
        icon="rate"
      />
      <List
        type="next"
        name="Help Center"
        desc="Read our guidelines"
        icon="help"
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
