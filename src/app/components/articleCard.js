import { Card } from "react-native-paper"
import { Text } from "react-native-paper"
import { router, useRouter } from "expo-router"

export default function ArticleCard({title, imageLink, date, month, year}){
    const router = useRouter()
    const monthName = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
    return (
        <Card style={{width:'100%', alignSelf:'center', marginVertical:10, backgroundColor:"#F8F7F3"}} onPress={() => router.push("/articleDetail")} contentStyle={{color:"black"}}>
            <Card.Cover source={{ uri: imageLink }} style={{height:130}}/>
                <Card.Content style={{marginTop:10}}>
                    <Text variant="bodySmall">{monthName[month]} {date}, {year}</Text>
                    <Text variant="titleMedium">{title}</Text>
                </Card.Content>
        </Card>
    )
}