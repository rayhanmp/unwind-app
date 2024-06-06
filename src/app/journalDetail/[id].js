import { ScrollView, View, Text, StyleSheet, Pressable, Image} from "react-native"
import { Divider, PaperProvider } from "react-native-paper"
import Navbar from "../components/navbar"
import backArrow from "../../../assets/backArrow.png"
import clock from "../../../assets/clock.png"
import { useRouter } from "expo-router"
import { useLocalSearchParams } from "expo-router"
import { useState, useEffect} from "react"
import { FIREBASE_DB } from "../../../firebaseConfig"
import {doc, getDoc } from "firebase/firestore"

export default function JournalDetail(){
    const [date, setDate] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [hour, setHour] = useState('')
    const [minute, setMinute] = useState('')
    const monthName = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];
    day_string = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    
    const fetchData = async () => {
        const docRef = doc(FIREBASE_DB, "workSession", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setDate(docSnap.data().date.toDate().getDate())
            setMonth(docSnap.data().date.toDate().getMonth())
            setYear(docSnap.data().date.toDate().getFullYear())
            setDay(docSnap.data().date.toDate().getDay())
            setHour(docSnap.data().date.toDate().getHours())
            setMinute(docSnap.data().date.toDate().getMinutes())
            setTitle(docSnap.data().journalTitle)
            setContent(docSnap.data().journalContent)
            console.log(docSnap)
        } else {
          console.log("No such document!");
        }
      };  

    const formatNumber = (number) =>{
        return number < 10 ? `0${number}` : number;
    }

    useEffect(() =>{
    fetchData(); 
    }, [])

    const { id } = useLocalSearchParams();  
    router = useRouter()
    return(
        <View style={styles.container}>
            <PaperProvider>
                <View style={styles.journalHeader}>
                    <Pressable onPress={()=>{router.push("/pastJournal")}}>
                        <Image
                            style={{  width: 27, height: 25 }}
                            source={backArrow}
                        />
                    </Pressable>
                    <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical: 10}}>
                        <View style={{alignItems:"center"}}>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{fontSize:28, fontWeight:"bold", color:"#9768CD"}}>{date}</Text>
                                <Text style={{fontSize:28, fontWeight:"bold", color:"#2A1735"}}> {monthName[month]}</Text>
                            </View>
                            <Text style={{fontSize:15}}>{year}, {day_string[day]} </Text>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Image source={clock} style={{height:20, width:20, marginRight:10}}></Image>
                            <Text style={{color: "#BBB9B5", fontSize:18}}>{formatNumber(hour)}:{formatNumber(minute)}</Text>
                        </View>
                    </View>
                </View>
                <Divider style={styles.divider} />
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        <Text style={{fontSize:25, fontWeight:'bold', color:"#9768CD", marginBottom:10}}>{title}</Text>
                        <Text>
                            {content}
                        </Text>
                </ScrollView>
                <Navbar />
            </PaperProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F7F3'
    },
    scrollViewContent: { 
        padding : 20,
        paddingBottom: 120, // Ensure there is some padding at the bottom to make the scrolling smoother
    },
    divider: {
        marginTop: 25,
        backgroundColor: '#BBB9B5',
        height: 1,
    },
    journalHeader : {
        height: "18%",
        paddingHorizontal: "5%",
        paddingTop: "15%"
    }
  });