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
      <View style={styles.container}>
      <PaperProvider>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <ArticleBanner />
          <View style={styles.articleContainer}>
            <Text style={{color:"#BBB9B5", fontSize:18, fontWeight:"bold"}}>Learn More!</Text>
            { renderCard(5) }
          </View>
        </ScrollView>
        <Navbar/>
      </PaperProvider>
      </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F1EDDF',
    },
    articleContainer: {
      paddingHorizontal: 20
    },
    scrollViewContent: {
      paddingBottom: 120, // Ensure there is some padding at the bottom to make the scrolling smoother
    },
  });