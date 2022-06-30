import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {Background} from '../../components/Background';
import {GuildIcon} from '../../components/GuildIcon';
import {Header} from '../../components/Header';
import {CategorySelect} from '../../components/CategorySelect';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {theme} from '../../global/styles/themme';
import {styles} from './styles';
import {SmallInput} from '../../components/SmallInput';
import {TextArea} from '../../components/TextArea';

import {Button} from '../../components/Button';
import {ModalView} from '../../components/ModalView';
import {Servidores} from '../Servidores';
import {ServidorProps} from '../../components/Servidor';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<ServidorProps>({} as ServidorProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }
  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }
  function handleOpenGuildsSelect(guildSelect: ServidorProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }
  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView>
        <Background>
          <Header title="Agendar Partida" />
          <Text
            style={[
              styles.label,
              {marginLeft: 24, marginTop: 36, marginBottom: 18},
            ]}>
            Categoria
          </Text>
          <CategorySelect
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />
          <View style={styles.form}>
            <TouchableOpacity onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.icon ? <View style={styles.image} /> : <GuildIcon />}
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : 'Selecione um Servidor'}
                  </Text>
                </View>
                <FontAwesome5
                  name={'chevron-right'}
                  size={18}
                  color={theme.colors.heading}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.field}>
              <View>
                <Text style={[styles.label, {marginBottom: 12}]}>
                  Dia e mês
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
              <View>
                <Text style={[styles.label, {marginBottom: 12}]}>
                  Hora e minuto
                </Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>
            <View style={[styles.field, {marginBottom: 12}]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.caractereLimites}>Máx 100 caractéres</Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </Background>
      </ScrollView>
      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
        <Servidores handleGuildSelect={handleOpenGuildsSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
