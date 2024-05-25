import { ScrollView, View, Text, StyleSheet, Pressable, Image} from "react-native"
import { Divider, PaperProvider } from "react-native-paper"
import Navbar from "./components/navbar"
import backArrow from "../../assets/backArrow.png"
import clock from "../../assets/clock.png"
import { useRouter } from "expo-router"

export default function JournalDetail(){
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
                                <Text style={{fontSize:28, fontWeight:"bold", color:"#9768CD"}}>10 </Text>
                                <Text style={{fontSize:28, fontWeight:"bold", color:"#2A1735"}}>OCT</Text>
                            </View>
                            <Text style={{fontSize:15}}>Oct, 2023</Text>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Image source={clock} style={{height:20, width:20, marginRight:10}}></Image>
                            <Text style={{color: "#BBB9B5", fontSize:18}}>20:00</Text>
                        </View>
                    </View>
                </View>
                <Divider style={styles.divider} />
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        <Text style={{fontSize:25, fontWeight:'bold', color:"#9768CD", marginBottom:10}}>UI/UX Adventures</Text>
                        <Text>
                        Today i did a lot, I managed to finish my tasks for the UI/UX design they assigned me and honestly I’m quite proud of it.
                        {'\n'}
                        {'\n'}
                        I finished my low fidelity design for the application i am making
                        {'\n'}
                        {'\n'}
                        I also continue the high fidelity design but its not done yet. I’m thinking of adding some changes for the new features we are implementing. 
                        {'\n'}
                        {'\n'}
                        I made a new mascot for our application, his name is Windee and i love him so much!

                        It’s been quite a long day and im proud of what i did today!

                        Today i did a lot, I managed to finish my tasks for the UI/UX design they assigned me and honestly I’m quite proud of it. I finished my low fidelity design for the application i am making
                        {'\n'}
                        {'\n'}
                        I also continue the high fidelity design but its not done yet. I’m thinking of adding some changes for the new features we are implementing. 
                        {'\n'}
                        {'\n'}
                        I made a new mascot for our application, his name is Windee and i love him so much!

                        It’s been quite a long day and im proud of what i did today!

                        Today i did a lot, I managed to finish my tasks for the UI/UX design they assigned me and honestly I’m quite proud of it.
                        {'\n'}
                        {'\n'}
                        I finished my low fidelity design for the application i am making
                        {'\n'}
                        {'\n'}
                        I also continue the high fidelity design but its not done yet. I’m thinking of adding some changes for the new features we are implementing. 
                        {'\n'}
                        {'\n'}
                        I made a new mascot for our application, his name is Windee and i love him so much!

                        It’s been quite a long day and im proud of what i did today!
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