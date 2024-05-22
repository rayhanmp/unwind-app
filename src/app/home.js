import * as React from 'react';
import { FlatList, View, StyleSheet, Text} from 'react-native'; 
import Navbar from './components/navbar';
import { useRouter } from 'expo-router';
import { Button } from 'react-native-paper';


export default function Home(){

    const router = useRouter();

    return (<View style={styles.container}>
    <Text>Home, Testing</Text>
    <Button onPress={() => router.push("/meditation")}>Go to Meditation</Button>
    <Navbar />
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F1EDDF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 100
    }
  });