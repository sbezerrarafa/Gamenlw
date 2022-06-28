import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, {ReactNode} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../global/styles/themme';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/core';

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({title, action}: Props) {
  const navigation = useNavigation();

  function handleGoback() {
    navigation.goBack();
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary100, theme.colors.secondary40]}>
      <TouchableOpacity onPress={handleGoback}>
        <FontAwesome5
          name={'arrow-left'}
          size={24}
          color={theme.colors.heading}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {action && <View>{action}</View>}
    </LinearGradient>
  );
}
