import * as React from 'react';
import { FlatList, View, StyleSheet, Text} from 'react-native'; 
import Navbar from './components/navbar';
import ArticleCard from './components/articleCard';

export default function Article(){
    return (<View style={styles.container}>
    <Text>Article, Testing</Text>
    <ArticleCard />
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