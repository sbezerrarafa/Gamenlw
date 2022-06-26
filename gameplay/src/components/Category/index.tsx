import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SvgProps} from 'react-native-svg';
import {theme} from '../../global/styles/themme';
import {styles} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export function Category({title, icon: Icon, checked = false, ...rest}: Props) {
  return (
    <TouchableOpacity {...rest}>
      <LinearGradient
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
        style={styles.container}>
        <View style={[styles.content, {opacity: checked ? 1 : 0.4}]}>
          <View style={checked ? styles.checked : styles.check} />
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
