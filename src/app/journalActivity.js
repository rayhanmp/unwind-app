import { ScrollView, View, Text, StyleSheet, Pressable, Image} from "react-native"
import { Divider, PaperProvider, TextInput } from "react-native-paper"
import { useRoute, useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from "expo-router"
import { useState, useEffect, useRef } from "react"
import { FIREBASE_DB } from "../../firebaseConfig"

export default function journalActivity(){
    const route = useRoute()
    const navigation = useNavigation()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const { workTime, breakTime, startTime, chosenActivity } = route.params;
    const monthName = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];
    day_string = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    const [timeLeft, setTimeLeft] = useState(breakTime);
    const timerRef = useRef(null);
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
        console.log(startTime)
        return () => clearInterval(timerRef.current);
    }, []);

    useEffect(() => {
        if (timeLeft <= 0) {
          clearInterval(timerRef.current);
          navigation.navigate('doneActivity', { workTime, breakTime, startTime, chosenActivity, journalTitle : title, journalContent : content})
        }
      }, [timeLeft]);

    return(
        <View style={styles.container}>
            <PaperProvider>
                <View style={styles.journalTimer}>
                        <Text style={{alignSelf:"center", color:"#F8F7F3"}}>
                            BREAK TIME
                        </Text>
                        <Text style={{alignSelf:"center", fontSize:28, color:"#F8F7F3", fontWeight: "bold"}}>
                            {new Date(timeLeft * 1000).toISOString().substr(14, 5)}
                        </Text>
                </View>
                <View style={styles.journalHeader}>
                    <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical: 10}}>
                        <View style={{alignItems:"center"}}>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{fontSize:28, fontWeight:"bold", color:"#9768CD"}}>{startTime.getDate()} </Text>
                                <Text style={{fontSize:28, fontWeight:"bold", color:"#2A1735"}}>{monthName[startTime.getMonth()]}</Text>
                            </View>
                            <Text style={{fontSize:15}}>{startTime.getFullYear()}, {day_string[startTime.getDay()]}</Text>
                        </View>
                    </View>
                </View>
                <Divider style={styles.divider} />
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        <TextInput
                            style={styles.inputTitle}
                            underlineColor="#F8F7F3"
                            activeUnderlineColor="#F8F7F3"
                            placeholder="Input Title"
                            placeholderTextColor="#B28BEB"
                            textColor="#9768CD"
                            onChangeText={setTitle}
                        />
                        <TextInput
                            style={styles.inputContent}
                            underlineColor="#F8F7F3"
                            activeUnderlineColor="#F8F7F3"
                            multiline={true}
                            placeholder="Write your thoughts..."
                            placeholderTextColor="#BBB9B5"
                            onChangeText={setContent}
                        />
                </ScrollView>
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
    },
    inputContent: {
        paddingHorizontal: 0,
        backgroundColor: '#F8F7F3',
    },
    inputTitle: {
        paddingHorizontal: 0,
        backgroundColor: '#F8F7F3',
        fontSize:25, 
        fontWeight:'bold', 
        color:"#9768CD"
    },
    journalTimer:{
        backgroundColor: '#F2AD72',
        width: "50%",
        alignSelf: "center",
        padding: 2,
        paddingTop: 27,
        borderBottomRightRadius : 15,
        borderBottomLeftRadius : 15, 
    }
  });