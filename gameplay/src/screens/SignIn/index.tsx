import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import {style} from './style';
import IllustrationImg from '../../assets/illustration.png';
import {ButtonIcon} from '../../components/Buttonicon';
import {useNavigation} from '@react-navigation/native';

export function SignIn() {
  const navigation = useNavigation();

  function handleSingIn() {
    navigation.navigate('Home');
  }
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
        <ButtonIcon
          title="Entrar com Discord"
          activeOpacity={0.8}
          onPress={handleSingIn}
        />
      </View>
    </View>
  );
}
