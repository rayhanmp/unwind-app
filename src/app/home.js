import * as React from 'react';
import { FlatList, View, StyleSheet, Text} from 'react-native'; 
import Navbar from './components/navbar';

export default function Home(){
    return (<View style={styles.container}>
    <Text>Home, Testing</Text>
    <Navbar />
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F7F3',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 100
    }
  });