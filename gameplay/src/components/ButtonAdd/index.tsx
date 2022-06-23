import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {styles} from './styles';
import {theme} from '../../global/styles/themme';

export function ButtonAdd({...rest}: TouchableOpacityProps) {
  return (
    <>
      <TouchableOpacity style={styles.container} {...rest}>
        <FontAwesome5 name={'plus'} size={24} color={theme.colors.heading} />
      </TouchableOpacity>
    </>
  );
}
