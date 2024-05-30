import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Divider, Button } from 'react-native-paper';
import meditationBanner from '../../assets/meditationBanner.png'; // Ensure the path is correct
import { useRouter } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import journalingBanner from "../../assets/journallingBanner.png"

const BasicJournalScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={journalingBanner} style={styles.banner} /> 
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Basic Meditation</Title>
          <Paragraph style={styles.minute}>10 min</Paragraph>
          <Paragraph style={styles.description}>
            Increase self awareness and appreciation for the little things you did today!
          </Paragraph>
          <Button
            style={styles.buttonWide}
            mode="contained"
            onPress={() => navigation.navigate('meditationAudio', { breakTime: 300 })}
          >
            START
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  // Style the ScrollView content container
  banner: {
    width: '100%',
    height: 550, // Adjust the height as needed
    resizeMode: 'cover',
  },
  card: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    marginTop: -25,
    paddingTop: 20,
    paddingBottom: 20,
    padding: 5,
    backgroundColor: '#F8F7F3',
    position:'absolute',
    bottom:0,
    width:"100%"
  },
  title: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 28
  },
  minute: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    marginTop: 10,
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 16,
    fontWeight: 'bold',
    fontSize: 22,
    paddingTop: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',    
    justifyContent: 'center',
  },
  button: {
    width: 160,
    height: 139,
    margin: 5,
    borderRadius: 10
  },
  buttonWide: {
    marginTop: 10,
    width: 330,
    borderRadius: 20,
    padding: 3,
    alignSelf: 'center',
    backgroundColor: '#B28BEB',
  },
  container: {
    flex: 1,
    height:"100%"
  }
});

export default BasicJournalScreen;
