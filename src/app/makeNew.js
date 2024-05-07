import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import { Link } from 'expo-router'; 
import { FAB } from 'react-native-paper';

export default function Home(){
    return (<View style={styles.container}>
        <Text> This is Make New </Text>
        <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log('Pressed')}
        />
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F7F3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
  });