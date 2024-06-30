import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default function Input(props) {
  return (
    <View style={[styles.inputContainer, props.style]}>
      <TextInput {...props} style={[styles.input]} />
      {props.icon}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F9FAFB",
    height: 52
  },
  input: {
    flexGrow: 1,
  }
})