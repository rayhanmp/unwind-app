import * as React from 'react';
import { FlatList, View, StyleSheet, Text, ScrollView} from 'react-native'; 
import Navbar from './components/navbar';
import ArticleCard from './components/articleCard';
import ArticleBanner from './components/articleBanner';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { FIREBASE_DB } from '../../firebaseConfig';

export default function Article(){
    const [articles, setArticles] = useState([]);

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(FIREBASE_DB, "articles"));
        const fetchedArticles = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching articles: ", error);
      }
    };    

    useEffect(() =>{
      fetchData(); 
    },[]); 

    return (
      <View style={styles.container}>
      <PaperProvider>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <ArticleBanner />
          <View style={styles.articleContainer}>
            <Text style={{color:"#BBB9B5", fontSize:18, fontWeight:"bold"}}>Learn More!</Text>
            {articles.map(article => (
              <ArticleCard
                key={article.id}
                title={article.title}
                imageLink={article.imageLink}
                content={article.content}
                authorName={article.authorName}
                // Accessing date.seconds and date.nanoseconds
                date={`${article.date.toDate().getDate()}`}
                month={`${article.date.toDate().getMonth()}`}
                year={`${article.date.toDate().getFullYear()}`}
                id={article.id}
              />
            ))}
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