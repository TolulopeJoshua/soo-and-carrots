import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.navigate('/')}>
        <Image
          source={require('../assets/welcome.png')}
          style={styles.image}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  image: {
    width: 350,
    height: 330,
  }
})