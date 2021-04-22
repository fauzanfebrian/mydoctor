import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ILCatAnak, ILCatObat, ILCatPsikiater, IlCatUmum} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    switch (category) {
      case 'Dokter Umum':
        return <IlCatUmum />;
      case 'Dokter Anak':
        return <ILCatAnak />;
      case 'Psikiater':
        return <ILCatPsikiater />;
      case 'Dokter Obat':
        return <ILCatObat />;
      default:
        return <IlCatUmum />;
    }
  };
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Icon style={styles.illustration} />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    marginRight: 10,
    minWidth: 100,
    height: 130,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    color: colors.text.primary,
    fontFamily: fonts.primary[300],
  },
  category: {
    fontSize: 12,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
});
