import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function Button({ children, onPress = () => { }, icon = null, type = 'default' }) {
  if (type === 'default') {
    return (
      <Pressable style={styles.default} onPress={onPress}>
        <Text style={{ color: 'white' }}>{children}</Text>
      </Pressable>
    )
  }
  return (
    <Pressable style={[styles.button, styles[type]]} onPress={onPress}>
      {icon}
      <Text style={styles.buttonText}>{children}</Text>
      <EvilIcons name="arrow-right" size={55} color="white" />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 32,
    paddingVertical: 6,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF'
  },
  default: {
    backgroundColor: '#253BFF',
    paddingVertical: 14,
    borderRadius: 48,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: '#253BFF',
  },
  secondary: {
    backgroundColor: '#1D2939',
  }
});