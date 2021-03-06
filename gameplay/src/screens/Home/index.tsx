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
import {Background} from '../../components/Background';
import {useNavigation} from '@react-navigation/core';

export function Home() {
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

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
    setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails');
  }
  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <ListHeader title="Partidas Agendadas" subTitle="Total 6" />

      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Appointments onPress={handleAppointmentDetails} data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{paddingBottom: 69}}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
      />
    </Background>
  );
}
