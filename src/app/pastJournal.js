import * as React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'; 
import Navbar from './components/navbar';
import { PaperProvider, Divider } from 'react-native-paper';
import journal from '../../assets/Journal.png';
import JournalCard from './components/journalCard';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { FIREBASE_DB } from '../../firebaseConfig';

export default function PastJournal(){
  const [journals, setJournals] = useState([]); 
  const [groupedJournals, setGroupedJournals] = useState({});

  const fetchData = async () => {
    try {
      const data_query = query(collection(FIREBASE_DB, "workSession"), where("activityType", "==", "journaling"));
      const querySnapshot = await getDocs(data_query);
      const fetchedJournals = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setJournals(fetchedJournals);
      groupJournalsByMonth(fetchedJournals);
    } catch (error) {
      console.error("Error fetching articles: ", error);
    }
  };    

  const groupJournalsByMonth = (journals) => {
    const grouped = journals.reduce((acc, journal) => {
      const date = journal.date.toDate();
      const monthYear = `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }
      acc[monthYear].push(journal);
      return acc;
    }, {});
    setGroupedJournals(grouped);
  };

  useEffect(() => {
    fetchData(); 
  }, []); 

  return (
    <View style={styles.container}>
      <PaperProvider>
        <View style={styles.journalHeader}>
          <Image source={journal} style={{width:50, height:68, marginBottom: 20}} />
          <Text style={styles.pastJournalTitle}>Journal Entries</Text>
        </View>
        <Divider style={styles.divider} />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {
            Object.keys(groupedJournals).map((monthYear, index) => (
              <View key={index}>
                <Text style={styles.monthHeader}>{monthYear.toUpperCase()}</Text>
                {
                  groupedJournals[monthYear].map(journal => (
                    <JournalCard 
                      isFirst={true}
                      key={journal.id}
                      title={journal.journalTitle}
                      content={journal.journalContent}
                      date={`${journal.date.toDate().getDate()}`}
                      day={`${journal.date.toDate().getDay()}`}
                      id={journal.id}
                    />
                  ))
                }
              </View>
            ))
          }
        </ScrollView>
        <Navbar />
      </PaperProvider>
    </View>
  );
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
    paddingBottom: 120,
    padding: 20,
  },
  monthHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#BBB9B5',
    marginBottom: 10,
    marginTop: 20,
  },
});
