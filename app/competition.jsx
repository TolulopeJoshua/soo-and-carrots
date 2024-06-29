import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/card";
import { router } from "expo-router";

import { useDispatch, useSelector } from "react-redux";
import { signupActions } from "../store";

export default function Competition() {
  // const [comps] = useState(Array(5).fill({}).map((c, id) => ({
  //   name: '20th Asian Game - Achi Nagoya 2026 (Winter)',
  //   date: 'YYYY-MM-DD ~ YYYY-MM-DD',
  //   location: 'Pyeongchang, Gangwon-do, Korea',
  //   id
  // })))
  const { competitions: comps } = useSelector(({ signup }) => signup);

  const [focus, setFocus] = useState(-1);

  const dispatch = useDispatch();

  const onpress = (id) => {
    setFocus(id);
    dispatch(signupActions.updateDetails({
      competition: comps.find(comp => comp.id == id),
    }))
    router.back();
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Competition</Text>
        <Text>
          An account is needed per one host. If you already have an account for the host of competition you want to sign up, you can login and  register.
        </Text>
      </View>
      <View style={{ height: 'auto', marginTop: 16 }}>
        <FlatList
          data={comps}
            renderItem={({ item }) => (
              <Card focused={focus == item.id} {...item} onPress={() => onpress(item.id)} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingBottom: 100,
    paddingHorizontal: 24,
    height: '100%',
  },
  heading: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 8
  },
  card: {
    backgroundColor: '#253BFF',
    padding: 24,
    borderRadius: 16,
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: "700",
  },
  cardDate: {
    fontWeight: '500',
    color: 'white',
  },
  cardLocation: {
    color: '#B8BFFF',
  }
})