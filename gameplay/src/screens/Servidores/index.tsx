import React from 'react';
import {FlatList, View} from 'react-native';
import {ListDivider} from '../../components/ListDivider';
import {Servidor, ServidorProps} from '../../components/Servidor';
import {styles} from './style';

type Props = {
  handleGuildSelect: (servidor: ServidorProps) => void;
};

export function Servidores({handleGuildSelect}: Props) {
  const servidores = [
    {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    {
      id: '2',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    {
      id: '3',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    {
      id: '4',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    {
      id: '5',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    {
      id: '6',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={servidores}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Servidor data={item} onPress={() => handleGuildSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{paddingBottom: 68, paddingTop: 103}}
        style={styles.guilds}
      />
    </View>
  );
}
