import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../global/styles/themme';
import {styles} from './style';

type Props = {
  children: ReactNode;
};
export function Background({children}: Props) {
  return (
    <LinearGradient
      colors={[theme.colors.secondary80, theme.colors.secondary100]}
      style={styles.container}>
      {children}
    </LinearGradient>
  );
}
