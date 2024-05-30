import { View, Text, StyleSheet, ImageBackground, ScrollView, Pressable, Image} from "react-native";
import { Appbar, Button, PaperProvider } from "react-native-paper";
import Navbar from "../components/navbar";
import RightArrow_Icon from "../../../assets/RightArrow_Icon.png"
import { useLocalSearchParams, useRouter } from "expo-router";
import {doc, getDoc } from "firebase/firestore"
import { FIREBASE_DB } from '../../../firebaseConfig';
import { useEffect, useState } from "react";

export default function ArticleDetail(){
  const router = useRouter()

  const { id } = useLocalSearchParams();  
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState(''); 
  const [year, setYear] = useState(''); 
  const [content, setContent] = useState(''); 
  const [author, setAuthor] = useState(''); 

  const fetchData = async () =>{
    const docRef = doc(FIREBASE_DB, "articles", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setTitle(docSnap.data().title)
      setAuthor(docSnap.data().authorName)
      setContent(docSnap.data().content)
      setDate(docSnap.data().date.toDate().getDate())
      setMonth(docSnap.data().date.toDate().getMonth())
      setYear(docSnap.data().date.toDate().getFullYear())
    } else {
      console.log("No such document!");
    }
  }

  const monthName = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];


  useEffect(() =>{
    fetchData(); 
  })

    return (<View style={styles.container}>
      <PaperProvider>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.articleHeader}>
          <Pressable onPress={()=>{router.push("/article")}}>
              <Image
                style={{  width: 27, height: 25 }}
                source={RightArrow_Icon}
              />
            </Pressable>
            <View style={styles.articleHeaderText}>
              <Text style={styles.articleDate}>{monthName[month]} {date}, {year}</Text>
              <Text style={styles.articleTitle}>{title}</Text>
              <Text style={styles.articleAuthor}>by {author}</Text>
            </View>
          </View>
          <View style={styles.articleContent}>
            <Text>
            {content}
            </Text>
        </View>
        </ScrollView>
        <Navbar />
      </PaperProvider>
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F7F3',
      //justifyContent:"center"
    },
    articleHeader : {
      backgroundColor:"#9768CD",
      height: "50%",
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    articleHeaderText : {
      alignItems:"center",
      justifyContent: "center",
      paddingHorizontal: 20,
      flex: 1,
      paddingBottom: 25
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
    },
    scrollViewContent: {
      paddingBottom: 250, // Ensure there is some padding at the bottom to make the scrolling smoother
      height:"100%"
    },
  });