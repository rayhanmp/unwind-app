import * as React from 'react';
import { FlatList, View, StyleSheet, Text} from 'react-native'; 
import Navbar from './components/navbar';

export default function Calendar(){
    return (<View style={styles.container}>
    <Text>Calendar, Testing</Text>
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