import {ThMenu} from '@styled-icons/typicons';
import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/themme';

export const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 100,
    height: 116,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },
  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 15,
  },
  check: {
    width: 12,
    height: 12,
    borderStartColor: theme.colors.secondary100,
    alignSelf: 'flex-end',
    marginRight: 7,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary100,
  },
  checked: {
    width: 10,
    height: 10,
    borderStartColor: theme.colors.primary,
    alignSelf: 'flex-end',
    marginRight: 7,
    borderRadius: 2,
    backgroundColor: theme.colors.primary,
  },
});
