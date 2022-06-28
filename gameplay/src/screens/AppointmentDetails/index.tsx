import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  FlatList,
} from 'react-native';
import {ListHeader} from '../../components/ListHeader';
import {Background} from '../../components/Background';
import {Header} from '../../components/Header';
import {theme} from '../../global/styles/themme';
import BannerImg from '../../assets/banner.png';
import {styles} from './styles';
import {Member} from '../../components/Member';
import {ListDivider} from '../../components/ListDivider';
import {ButtonIcon} from '../../components/Buttonicon';
import {style} from '../SignIn/style';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Rafael',
      avatar_url: 'https://github.com/sbezerrarafa.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Rafael',
      avatar_url: 'https://github.com/sbezerrarafa.png',
      status: 'offline',
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <TouchableOpacity>
            <FontAwesome5
              name={'share-alt'}
              size={20}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subTitle="Total 3" />
      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na Partida" />
      </View>
    </Background>
  );
}
