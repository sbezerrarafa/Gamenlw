import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Text, View} from 'react-native';
import {categories} from '../../utils/categories';
import {GuildIcon} from '../GuildIcon';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './styles';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import {theme} from '../../global/styles/themme';
import {ServidorProps} from '../Servidor';

export type AppointmentProps = {
  id: string;
  server: ServidorProps;
  category: string;
  date: string;
  description: string;
};

type Props = TouchableOpacityProps & {
  data: AppointmentProps;
};

export function Appointments({data, ...rest}: Props) {
  const [category] = categories.filter(item => item.id === data.category);
  const {owner} = data.server;
  const {primary, on} = theme.colors;
  return (
    <TouchableOpacity {...rest}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.guildIconContainer}
          colors={[theme.colors.secondary50, theme.colors.secondary70]}>
          <GuildIcon />
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.server.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{data.date}</Text>
            </View>
            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary : on} />
              <Text style={[styles.player, {color: owner ? primary : on}]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
