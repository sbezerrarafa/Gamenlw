import React from 'react';
import {theme} from '../../global/styles/themme';
import {styles} from './styles';
import {Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  urlImage: string;
};

export function Avatar({urlImage}: Props) {
  return (
    <LinearGradient
      colors={[theme.colors.secondary50, theme.colors.secondary70]}
      style={styles.container}>
      <Image source={{uri: urlImage}} style={styles.avatar} />
    </LinearGradient>
  );
}
