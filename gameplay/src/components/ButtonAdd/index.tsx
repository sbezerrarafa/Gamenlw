import React from 'react';

import {View, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {styles} from './styles';

type Props = TouchableOpacityProps & {
  title?: string;
};
export function ButtonAdd({...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}></TouchableOpacity>
  );
}
