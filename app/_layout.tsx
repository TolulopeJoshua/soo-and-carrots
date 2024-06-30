import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import Constants from "expo-constants";

import { Feather } from '@expo/vector-icons';

import { Provider } from 'react-redux';
import store from '../store/index';
import { StyleSheet, TextInput, View } from 'react-native';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '/',
};


function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });
  
  SplashScreen.preventAutoHideAsync();
  
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerTransparent: true, headerTitleAlign: 'center' }}>
        <Stack.Screen 
          name="index" 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="signup" 
          options={{ title: 'Create Account', presentation: 'modal' }}
        />
        <Stack.Screen 
          name="competition" 
          options={{
            title: 'Competition', presentation: 'modal',
            headerTitle: (props) => (
              <View style={styles.inputCont}>
                <TextInput style={styles.input} placeholder='Search' />
                <Feather name="search" size={24} color="#101828" />
              </View>
            )
          }}
        />
        <Stack.Screen 
          name="welcome" 
          options={{ headerShown: false }}
        />
      </Stack>
    </Provider>
  )
}

let AppEntryPoint = RootLayout;

if (Constants.expoConfig.extra.storybookEnabled === "true") {
  AppEntryPoint = require("../.storybook").default;
}

export default AppEntryPoint;

const styles = StyleSheet.create({
  inputCont: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F9FAFB',
    width: 250
  },
  input: {
    flexGrow: 1,
  },
})