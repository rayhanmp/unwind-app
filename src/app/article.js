import * as React from 'react';
import { FlatList, View, StyleSheet, Text, ScrollView} from 'react-native'; 
import Navbar from './components/navbar';
import ArticleCard from './components/articleCard';
import ArticleBanner from './components/articleBanner';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

export default function Article(){
    const renderCard = (amount) => {
      return Array.from({ length : amount}).map((_, index) => (
        <ArticleCard key={index}/>
      ));
    }

    return (
      <PaperProvider>
        <ScrollView style={styles.container}>
        <ArticleBanner />
        { renderCard(5) }
      </ScrollView>
      <Navbar />
      </PaperProvider>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F1EDDF',
      // paddingTop: 10
    }
  });