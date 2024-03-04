import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To</Text>
      <Text style={styles.subtitle}>Unwind</Text>
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
      <Button title="login"
      color='#9768CD'
      />
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
