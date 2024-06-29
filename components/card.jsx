import React from "react";
import { Pressable, ImageBackground, Text, StyleSheet } from "react-native";

export default function Card({ focused = false, name, date, location, onPress = () => {} }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <ImageBackground
        source={require('../assets/card-bg.png')}
        resizeMode="cover"
        style={{ ...styles.card, backgroundColor: focused ? '#4C53FF' : '#253BFF' }}
      >
        <Text style={styles.cardTitle}>
          {name}
        </Text>
        <Text style={styles.cardDate}>
          {date}
        </Text>
        <Text style={styles.cardLocation}>
          {location}
        </Text>
      </ImageBackground>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  card: {
    padding: 24,
    borderRadius: 16,
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12
  },
  cardDate: {
    fontWeight: '500',
    color: 'white',
  },
  cardLocation: {
    color: '#B8BFFF',
  }
})