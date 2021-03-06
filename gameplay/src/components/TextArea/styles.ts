import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/themme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 95,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    padding: 16,
    textAlignVertical: 'top',
  },
});
