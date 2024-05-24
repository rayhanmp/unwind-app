import * as React from 'react';
import { FlatList, View, StyleSheet, Text} from 'react-native'; 
import Navbar from './components/navbar';
import { addDoc, collection } from 'firebase/firestore';
import { FIREBASE_DB } from '../../firebaseConfig';
import { Button } from 'react-native-paper';

export default function Calendar(){
  const testingFirebase = async () => {
    console.log("Firebase tested");

    try {
      const docRef = await addDoc(collection(FIREBASE_DB, 'test2'), {
        title: "I am a test2",
        done: true,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

    return (<View style={styles.container}>
    <Button onPress={()=>testingFirebase()}>TESTING FIREBASE</Button>
    <Text>Calendar, Testing</Text>
    <Navbar />
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F1EDDF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 100
    }
  });