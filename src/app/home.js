import * as React from 'react';
import { FlatList, View, Text, StyleSheet, Linking, List} from 'react-native'; 
import { Link } from 'expo-router'; 
import { FAB } from 'react-native-paper';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
);

export default function Home(){
    return (<View style={styles.container}>
        <Text> This is Home </Text>
        <FlatList 
        data = {DATA}
        renderItem={({item}) => <Item title={item.title} />}
        />
        <Link href="/makeNew" asChild>
            <FAB
            icon="plus"
            style={styles.fab}
            />
        </Link>
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F7F3',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 100
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
  });