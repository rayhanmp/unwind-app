import { Card } from "react-native-paper"
import { Text } from "react-native-paper"
import { router, useRouter } from "expo-router"
import { View, StyleSheet} from "react-native"


export default function JournalCard({isFirst, title, content, day, date, id}){
    const router = useRouter()
    day_string = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    return (
        <View style={styles.container}>
            {isFirst &&
            <View style={{alignItems:"center", marginRight:10}}>
                <Text style={{ color: "#BBB9B5"}}>{day_string[day]}</Text>
                <View style={styles.date}>
                    <Text style={{fontSize:20, fontWeight:"bold",color:"#F8F7F3"}}>{date}</Text>
                </View>
            </View>
            }
            <Card mode="contained" style={{width:'85%', alignSelf:'center', backgroundColor:"#F8F7F3"}} onPress={() => 
                router.push({
                    pathname : "/journalDetail/[id]",
                    params: {id : id}
                })
                } contentStyle={{color:"black"}}>
                    <Card.Content>
                        <Text variant="titleMedium" style={{color:"#9768CD", fontSize:18}}>{title}</Text>
                        <Text variant="bodySmall" style={{color:"#2A1735", fontSize:13}}>{content}</Text>
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