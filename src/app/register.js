import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform} from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useRouter } from 'expo-router';
import registerBanner from "../../assets/registerBanner.png"

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 3000);

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <View style={styles.container}>
      <Image source={registerBanner} style={styles.logo}/>
      <View style={styles.contentContainer}>
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.subtitle}>Register to get started!</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        onChangeText={newUsername => setUsername(newUsername)}
        defaultValue={username}/>
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        onChangeText={newPassword => setPassword(newPassword)}
        defaultValue={password}
        secureTextEntry={true}/>
      <TextInput
        style={styles.textInput}
        placeholder="Confirm Password"
        onChangeText={newPassword => setPassword(newPassword)}
        defaultValue={password}
        secureTextEntry={true}/>
      <Button mode="contained" style={styles.button}onPress={() => {router.push('/home')}}> SIGN UP </Button>
      <Text style={{textAlign: 'center', marginTop: 40, color: '#BBB9B5', fontSize:14}}>ALREADY HAVE AN ACCOUNT? LOG IN</Text>
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
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F8F7F3',
    justifyContent: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  },
  logo : {
    height: 306,
    width: '100%',
  },
  title : {
    fontSize: 24,
    color : '#2A1735',
    fontWeight: '700',
    marginTop: -10
  },
  subtitle : {
    marginTop: 5,
    fontSize: 16,
    color : '#BBB9B5',
    marginBottom : 20
  },
  textInput: {
    backgroundColor: '#F1EDDF',
    padding: 10,
    paddingLeft: 15,
    margin: 5,
    borderRadius: 10,
  },
  button: {
    marginTop: 10,
    borderRadius: 30,
    padding: 3,
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#B28BEB',
  }
});
