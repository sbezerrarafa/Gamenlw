import React, {useState} from 'react';
import {Text, View, TextInput, Image, StatusBar} from 'react-native';
import {style} from './style';
import IllustrationImg from '../../assets/illustration.png';
import {ButtonIcon} from '../../components/Buttonicon';

export function SignIn() {
  return (
    <View style={style.container}>
      <Image
        source={IllustrationImg}
        style={style.image}
        resizeMode="stretch"
      />

      <View style={style.content}>
        <Text style={style.title}>
          Conecte-se{`\n`}e organize suas{`\n`}Jogatinas
        </Text>
        <Text style={style.subTitle}>
          Crie grupos para jogar seus games{`\n`} faboritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.8} />
      </View>
    </View>
  );
}
