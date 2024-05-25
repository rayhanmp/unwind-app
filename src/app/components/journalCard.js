import { Card } from "react-native-paper"
import { Text } from "react-native-paper"
import { router, useRouter } from "expo-router"
import { View, StyleSheet} from "react-native"


export default function JournalCard({isFirst}){
    const router = useRouter()

    return (
        <View style={styles.container}>
            {isFirst &&
            <View style={{alignItems:"center", marginRight:10}}>
                <Text style={{ color: "#BBB9B5"}}>SAT</Text>
                <View style={styles.date}>
                    <Text style={{fontSize:20, fontWeight:"bold",color:"#F8F7F3"}}>21</Text>
                </View>
            </View>
            }
            <Card mode="contained" style={{width:'85%', alignSelf:'center', backgroundColor:"#F8F7F3"}} onPress={() => router.push("/journalDetail")} contentStyle={{color:"black"}}>
                    <Card.Content>
                    <   Text variant="titleMedium" style={{color:"#9768CD", fontSize:18}}>UI/UX adventures</Text>
                        <Text variant="bodySmall" style={{color:"#2A1735", fontSize:13}}>Today i did a lot, I managed to finish my tasks for the UI/UX design they assigned me and honestly I’m quite proud of it. </Text>
                    </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    date : {
        backgroundColor: '#9768CD',
        width: 43,
        height: 43,
        borderRadius: 35,
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical:5
    },
})