import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import Constants from "expo-constants";

import { Provider } from 'react-redux';
import store from '../store/index';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '/',
};

SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });

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
          options={{ title: 'Competition', presentation: 'modal' }}
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