import { Card, Button } from "react-native-paper"
import { Text } from "react-native-paper"
import { StyleSheet } from "react-native"

export default function ArticleCard(){
    return (
        <Card style={{width:'90%'}}>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{height:130}}/>
                <Card.Content style={{marginTop:10}}>
                    <Text variant="bodySmall">October 22, 2023</Text>
                    <Text variant="titleMedium">How Meditation Works : The Process in 10 Stages</Text>
                </Card.Content>
        </Card>
    )
}