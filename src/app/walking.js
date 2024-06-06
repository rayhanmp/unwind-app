import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Divider, Button } from 'react-native-paper';
import walkingBanner from '../../assets/walkingBanner.png'; 
import energeticButton from '../../assets/energeticButton.png';
import calmButton from '../../assets/calmButton.png';
import ambianceButton from '../../assets/ambianceButton.png';
import silenceButton from '../../assets/silenceButton.png';
import { useRouter } from "expo-router";
import { useNavigation, useRoute } from '@react-navigation/native';

const ShortWalkScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { workTime, breakTime, startTime, chosenActivity } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image source={walkingBanner} style={styles.banner} /> 
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Short Walk</Title>
          <Paragraph style={styles.minute}>10 min</Paragraph>
          <Paragraph style={styles.description}>
            Go outside and feel the breeze! Walking helps to stretch your legs and prevent pains!
          </Paragraph>
          <Divider style={styles.divider} />
          <Paragraph style={styles.subtitle}>Choose how you meditate!</Paragraph>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => console.log("clicked")}>
              <Image source={silenceButton} style={styles.button} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("clicked")}>
              <Image source={energeticButton} style={styles.button} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("clicked")}>
              <Image source={calmButton} style={styles.button} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("clicked")}>
              <Image source={ambianceButton} style={styles.button} />
            </TouchableOpacity>
          </View>
          <Button
            style={styles.buttonWide}
            mode="contained"
            onPress={() => navigation.navigate('meditationAudio', { workTime, breakTime, startTime, chosenActivity })}
          >
            START
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Style the ScrollView content container
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F2AD72',
    alignItems: 'center', // Center content horizontally
  },
  banner: {
    width: '100%',
    height: 300, // Adjust the height as needed
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
    borderRadius: 10,
  },
  buttonWide: {
    marginTop: 10,
    width: 330,
    borderRadius: 20,
    padding: 3,
    alignSelf: 'center',
    backgroundColor: '#F2AD72',
  },
  divider: {
    marginTop: 35,
    backgroundColor: '#E8E8E8',
    height: 2.5,
  },
});

export default ShortWalkScreen;
