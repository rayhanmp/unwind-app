import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Appbar, Button } from "react-native-paper";
import Navbar from "./components/navbar";

export default function ArticleDetail(){
    return (<View style={styles.container}>
      <View style={styles.articleHeader}>
        <Text style={styles.articleDate}>October 22, 2023</Text>
        <Text style={styles.articleTitle}>How Meditation Works : The process in 10 Stages</Text>
        <Text style={styles.articleAuthor}>by Mergi Henandez</Text>
      </View>
      <View style={styles.articleContent}>
        <Text>
        Meditation, often thought of as a path to self-awareness and compassion, can also be a path to better health. Practiced for thousands of years in Hindu, Buddhist, Zen/Chan and Taoist communities, people use meditation today to cope with stress and worry in a busy world. It can help bring calm and insight to people who often feel anxious.
        {`\n`}
        {'\n'}
        Meditation refers to a set of techniques to enhance attention, emotional awareness, kindness, compassion, sympathetic joy, and mental calmness even in difficult situations. Some people find that regular meditation practice helps them be kind to themselves and more caring towards others. It can also teach you to be a little less reactive when tough situations arise.

        </Text>
      </View>
      <Navbar />
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F7F3',
      // justifyContent:"center"
    },
    articleHeader : {
      backgroundColor:"#9768CD",
      alignItems:"center",
      justifyContent: "center",
      height: "36%",
      paddingHorizontal:40
    },
    articleTitle: {
      color: "white",
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: "center",
      marginVertical: 6
    },
    articleAuthor : {
      color: "white",
      fontSize: 18,
      fontWeight: "bold"
    },
    articleDate: {
      color: "white",
      fontSize: 16
    },
    articleContent : {
      padding: 25
    }
  });