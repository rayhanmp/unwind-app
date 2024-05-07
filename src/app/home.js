import * as React from 'react';
import { FlatList, View, StyleSheet} from 'react-native'; 

export default function Home(){
    return (<View style={styles.container}>
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