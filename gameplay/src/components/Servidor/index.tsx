import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {styles} from './style';
import {GuildIcon} from '../GuildIcon';
import {theme} from '../../global/styles/themme';

export type ServidorProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  data: ServidorProps;
};

export function Servidor({data, ...rest}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} {...rest}>
      <GuildIcon />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.type}>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>
      </View>
      <FontAwesome5
        name={'chevron-right'}
        size={24}
        color={theme.colors.heading}
      />
    </TouchableOpacity>
  );
}
