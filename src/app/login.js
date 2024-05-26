import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import { useRouter } from 'expo-router';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

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
      Alert.alert('Login Failed', error.message);
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Glad to see you, again!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={newEmail => setEmail(newEmail)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={newPassword => setPassword(newPassword)}
        value={password}
        secureTextEntry
      />
      <Button mode="contained" onPress={handleLogin}>LOGIN</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: '#e3dfe6',
    width: 300,
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    color: '#9768CD',
  },
  subtitle: {
    fontSize: 36,
    color: '#9768CD',
    fontWeight: 'bold',
    marginBottom: 30,
  },
});
