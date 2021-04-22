import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  ICAddPhoto,
  ICBackDark,
  ICBackLight,
  ICNext,
  ICRemovePhoto,
} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    switch (icon) {
      case 'back-dark':
        return <ICBackDark />;
      case 'back-light':
        return <ICBackLight />;
      case 'add-photo':
        return <ICAddPhoto />;
      case 'remove-photo':
        return <ICRemovePhoto />;
      case 'next':
        return <ICNext />;
      default:
        return <ICBackDark />;
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
