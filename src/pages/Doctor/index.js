import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  DummyJsonDoctor,
} from '../../assets';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, fonts} from '../../utils';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <View style={styles.wrapper}>
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.title}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.container}>
                <Gap width={16 + 16} />
                {DummyJsonDoctor.category.map(item => (
                  <DoctorCategory
                    category={item.category}
                    key={item.id}
                    onPress={() => navigation.navigate('ChooseDoctor')}
                  />
                ))}
                <Gap width={6 + 16} />
              </View>
            </ScrollView>
          </View>
          <Text style={styles.sectionLabel()}>Top Rated Doctors</Text>
          <View style={styles.wrapper}>
            <RatedDoctor
              name="Alexa Rachel"
              desc="Pediatriacian"
              onPress={() => navigation.navigate('DoctorProfile')}
              avatar={DummyDoctor1}
            />
            <RatedDoctor
              name="Sunny Frank"
              desc="Dentist"
              onPress={() => navigation.navigate('DoctorProfile')}
              avatar={DummyDoctor2}
            />
            <RatedDoctor
              name="Poe Minn"
              desc="Podiastrist"
              onPress={() => navigation.navigate('DoctorProfile')}
              avatar={DummyDoctor3}
            />
          </View>
          <Text style={styles.sectionLabel(-16, -16)}>Good News</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  container: {flexDirection: 'row'},
  wrapperScroll: {marginHorizontal: -16},
  wrapper: {paddingHorizontal: 16},
  sectionLabel: (heightTop = 0, heightBottom = 0) => ({
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    fontSize: 16,
    marginTop: 30 + heightTop,
    marginBottom: 16 + heightBottom,
    marginLeft: 16,
  }),
});
