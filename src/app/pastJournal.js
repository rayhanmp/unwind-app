import * as React from 'react';
import { FlatList, View, StyleSheet, Text, Image, ScrollView} from 'react-native'; 
import Navbar from './components/navbar';
import { PaperProvider, Divider } from 'react-native-paper';
import journal from '../../assets/Journal.png'
import JournalCard from './components/journalCard';

export default function PastJournal(){
    return (<View style={styles.container}>
      <PaperProvider>
        <View style={styles.journalHeader}>
            <Image source={journal} style={{width:50, height:68, marginBottom: 20}}></Image>
            <Text style={styles.pastJournalTitle}>Journal Entries</Text>
        </View>
        <Divider style={styles.divider} />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={{fontSize:20, fontWeight:"bold", color: '#BBB9B5',marginBottom: 10}}>OCTOBER 2023</Text>
            <JournalCard isFirst={true}/>
            <JournalCard isFirst={false}/>
            <JournalCard isFirst={true}/>
            <JournalCard isFirst={false}/>
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
      height:"20%",
      marginTop : 50,
      borderColor: "gray",
    },
    pastJournalTitle : {
      fontSize: 40,
      fontWeight: "bold",
      color: '#2A1735'
    },
    divider: {
      marginTop: 25,
      backgroundColor: '#BBB9B5',
      height: 1,
    },
    scrollViewContent: {
      paddingBottom: 120, // Ensure there is some padding at the bottom to make the scrolling smoother
      padding: 20,
    },
  });