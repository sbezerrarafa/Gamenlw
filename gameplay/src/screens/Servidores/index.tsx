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
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  );
}
