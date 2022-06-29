import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {theme} from '../global/styles/themme';

interface Props {
  navigation: any;
}
export default class Splash extends React.Component<Props> {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('SignIn');
    }, 3000);
  };
  render() {
    return (
      <View style={style.container}>
        <Image source={require('../assets/splash.png')} style={style.image} />
        <Text style={style.header}>Game Rafa</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 500,
    width: 500,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.colors.heading,
  },
});
