import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert, Image, Platform, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import { useRouter, Link } from 'expo-router';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import loginBanner from "../../assets/loginBanner.png"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const auth = FIREBASE_AUTH;

  useEffect(() => 
    {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 3000);
    };
    prepare();
  }, []);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        router.push('/home');
      }
    } catch (error) {
      console.log(error.code);
      let errorMessage = '';
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'User not found. Please check your email or sign up.';
          break;
        case 'auth/invalid-credential':
          errorMessage = 'Invalid password. Please try again.';
          break;
          case 'auth/invalid-email':
            errorMessage = 'Invalid email. Please type a valid email.';
            break;
        default:
          errorMessage = 'Login failed. Please try again later.';
      }
      showAlert(errorMessage);
    }
  };

  const showAlert = (message) => {
    Alert.alert('Login Failed', message);
  };

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <Image source={loginBanner} style={styles.banner}/>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Glad to see you, again!</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              onChangeText={newEmail => setEmail(newEmail)}
              value={email}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              onChangeText={newPassword => setPassword(newPassword)}
              value={password}
              secureTextEntry
            />
            <Button mode="contained" onPress={handleLogin} style={styles.button}>LOGIN</Button>

            <Link href="/login" style={{textAlign: 'center', marginTop: 40, color: '#BBB9B5', fontSize:14}}>DON’T HAVE AN ACCOUNT? SIGN UP</Link>
            <StatusBar style="auto" />
          </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7F3',
  },
  banner: {
    width: '100%',
    height: 300,
  },
  contentContainer: {
    padding: 40,
  },
  textInput: {
    backgroundColor: '#F1EDDF',
    padding: 10,
    paddingLeft: 15,
    margin: 5,
    borderRadius: 10,
  },
  button: {
    marginTop: 20,
    borderRadius: 30,
    padding: 3,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#B28BEB',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2A1735',
  },
  subtitle: {
    fontSize: 20,
    color: '#BBB9B5',
    marginBottom: 30,
  },
});
