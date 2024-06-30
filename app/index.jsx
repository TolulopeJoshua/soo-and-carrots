import { StyleSheet, Text, View, ImageBackground, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import Button from "../components/button";
import { Feather } from '@expo/vector-icons';

export default function Home() {
  const next = () => {
    router.push('/signup');
  }
  const loginIcon = <Feather name="log-in" size={15} color="white" />
  const mailIcon = <Feather name="mail" size={15} color="white" />

  return (
    <ImageBackground
      source={require('../assets/image1.png')}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.inner}>
        <View style={{ paddingHorizontal: 24 }}>
          <Text style={styles.mainText}>
            Soo
          </Text>
          <Text style={styles.mainText}>
            and Carrots
          </Text>
        </View>
        <LinearGradient
          colors={['transparent', '#161718', 'black']}
          style={styles.bottomBox}>
          <Button
            type="primary"
            onPress={next}
            icon={loginIcon}
          >
            Sign up for free
          </Button>
          <Button
            type="secondary"
            icon={mailIcon}
          >
            Continue with Email
          </Button>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  inner: {
    width: '100%',
    height: '100%',
    paddingTop: 72,
    justifyContent: 'space-between',
  },
  mainText: {
    fontSize: 36,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  bottomBox: {
    gap: 16,
    paddingHorizontal: 24,
    paddingBottom: 72,
    height: '40%',
    justifyContent: 'flex-end',
  },
});