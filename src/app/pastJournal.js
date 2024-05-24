import * as React from 'react';
import { FlatList, View, StyleSheet, Text, Image, ScrollView} from 'react-native'; 
import Navbar from './components/navbar';
import { PaperProvider, Divider, Button } from 'react-native-paper';
import journal from '../../assets/Journal.png'
export default function PastJournal(){
  return (<View style={styles.container}>
      <PaperProvider>
        <View style={styles.journalHeader}>
            <Image source={journal} style={{width:60, height: 83, marginBottom: 20}}></Image>
            <Text style={styles.pastJournalTitle}>Journal Entries</Text>
        </View>
        <ScrollView>
          <Divider style={styles.divider} />
          <View>
            <Text>
              Hellow
            </Text>
            <Button onPress={()=>testingFirebase()}>TESTING FIREBASE</Button>
          </View>
        </ScrollView>
        <Navbar />
      </PaperProvider>
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F1EDDF'
    },
    journalHeader : {
      alignItems: "center",
      justifyContent: "flex-end",
      height:200,
      marginTop : 50,
      borderColor: "gray",
    },
    pastJournalTitle : {
      fontSize: 40,
      fontWeight: "bold",
      color: '#2A1735'
    },
    divider: {
      marginTop: 35,
      backgroundColor: '#BBB9B5',
      height: 2,
    }
  });