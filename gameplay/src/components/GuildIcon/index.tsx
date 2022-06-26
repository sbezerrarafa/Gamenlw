import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';

export function GuildIcon() {
  const uri = 'https://techgara.com/uploads/2021/7/discord-icon-1.jpg';
  return <Image source={{uri}} style={styles.image} resizeMode={'cover'} />;
}
