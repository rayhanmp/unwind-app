import { Card } from "react-native-paper"
import { Text } from "react-native-paper"
import { router, useRouter } from "expo-router"

export default function ArticleCard(){
    const router = useRouter()

    return (
        <Card style={{width:'100%', alignSelf:'center', marginVertical:10, backgroundColor:"#F8F7F3"}} onPress={() => router.push("/articleDetail")} contentStyle={{color:"black"}}>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{height:130}}/>
                <Card.Content style={{marginTop:10}}>
                    <Text variant="bodySmall">October 22, 2023</Text>
                    <Text variant="titleMedium">How Meditation Works : The Process in 10 Stages</Text>
                </Card.Content>
        </Card>
    )
}