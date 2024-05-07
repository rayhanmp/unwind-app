import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useRouter } from 'expo-router';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 3000);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.subtitle}>Register to get started!</Text>
      <TextInput
        style={
          {height: 50,
          borderRadius:10,
          padding:10,
          margin:10,
          backgroundColor:'#e3dfe6',
          width : 300,
          fontSize:18
        }}
        placeholder="Username"
        onChangeText={newUsername => setUsername(newUsername)}
        defaultValue={username}/>
      <TextInput
        style={{
          height: 50,
          borderRadius:10,
          padding:10,
          margin:10,
          backgroundColor:'#e3dfe6',
          width : 300,
          fontSize:18
        }}
        placeholder="Password"
        onChangeText={newPassword => setPassword(newPassword)}
        defaultValue={password}
        secureTextEntry={true}/>
              <TextInput
        style={{
          height: 50,
          borderRadius:10,
          padding:10,
          margin:10,
          backgroundColor:'#e3dfe6',
          width : 300,
          fontSize:18
        }}
        placeholder="Confirm Password"
        onChangeText={newPassword => setPassword(newPassword)}
        defaultValue={password}
        secureTextEntry={true}/>
      <Button mode="contained" onPress={() => {router.push('/home')}}> LOGIN </Button>
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
  logo : {
    height: 200,
    width:200
  },
  title : {
    fontSize: 24,
    color : '#9768CD',
  },
  subtitle : {
    fontSize: 36,
    color : '#9768CD',
    fontWeight : 'bold',
    marginBottom : 30
  }
});
