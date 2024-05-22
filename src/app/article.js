import * as React from 'react';
import { FlatList, View, StyleSheet, Text} from 'react-native'; 
import Navbar from './components/navbar';
import ArticleCard from './components/articleCard';
import ArticleBanner from './components/articleBanner';

export default function Article(){

    return (<View style={styles.container}>
    <ArticleBanner />
    <ArticleCard />
    <Navbar />
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F1EDDF',
      // paddingTop: 10
    }
  });