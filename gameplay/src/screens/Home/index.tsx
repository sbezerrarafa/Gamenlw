import {Iterm2} from '@styled-icons/simple-icons';
import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import {ButtonAdd} from '../../components/ButtonAdd';
import {CategorySelect} from '../../components/CategorySelect';
import {ListHeader} from '../../components/ListHeader';
import {Profile} from '../../components/Profile';
import {Appointments} from '../../components/Appointments';
import {styles} from './styles';
import {ListDivider} from '../../components/ListDivider';

export function Home() {
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      server: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10vv',
    },
    {
      id: '2',
      server: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10vv',
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <View style={styles.content}>
        <ListHeader title="Partidas Agendadas" subTitle="Total 6" />
        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Appointments data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
