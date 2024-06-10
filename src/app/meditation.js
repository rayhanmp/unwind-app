import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Divider, Button } from 'react-native-paper';
import { Audio } from 'expo-av';
import meditationBanner from '../../assets/meditationBanner.png'; // Ensure the path is correct
import femaleTutorButton from '../../assets/femaleTutorButton.png';
import maleTutorButton from '../../assets/maleTutorButton.png';
import ambianceButton from '../../assets/ambianceButton.png';
import silenceButton from '../../assets/silenceButton.png';
import { useNavigation, useRoute } from '@react-navigation/native';

const BasicMeditationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { workTime, breakTime, startTime, chosenActivity } = route.params;

  const [selectedOption, setSelectedOption] = useState(null);
  const [sound, setSound] = useState(null);

  const audioFiles = {
    maleTutor: require('../../assets/maletutor.mp3'),
    femaleTutor: require('../../assets/femaletutor.mp3'),
    ambiance: require('../../assets/ambiance.mp3'),
    silence: require('../../assets/silence.mp3'),
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playPreview = async (audioOption) => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(audioFiles[audioOption]);
    setSound(newSound);
    setSelectedOption(audioOption);

    newSound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        newSound.unloadAsync();
      }
    });

    await newSound.playAsync();
    setTimeout(async () => {
      await newSound.pauseAsync();
    }, 10000);
  };

  const navigateToMeditationAudio = () => {
    navigation.navigate('meditationAudio', { workTime, breakTime, startTime, chosenActivity, audioOption: selectedOption });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image source={meditationBanner} style={styles.banner} />
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Basic Meditation</Title>
          <Paragraph style={styles.minute}>10 min</Paragraph>
          <Paragraph style={styles.description}>
            Live happier and healthier by learning the fundamentals of meditation and mindfulness
          </Paragraph>
          <Divider style={styles.divider} />
          <Paragraph style={styles.subtitle}>Choose how you meditate!</Paragraph>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => playPreview('silence')}>
              <Image
                source={silenceButton}
                style={[
                  styles.button,
                  selectedOption === 'silence' && styles.selectedButton,
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => playPreview('femaleTutor')}>
              <Image
                source={femaleTutorButton}
                style={[
                  styles.button,
                  selectedOption === 'femaleTutor' && styles.selectedButton,
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => playPreview('maleTutor')}>
              <Image
                source={maleTutorButton}
                style={[
                  styles.button,
                  selectedOption === 'maleTutor' && styles.selectedButton,
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => playPreview('ambiance')}>
              <Image
                source={ambianceButton}
                style={[
                  styles.button,
                  selectedOption === 'ambiance' && styles.selectedButton,
                ]}
              />
            </TouchableOpacity>
          </View>
          <Button
            style={styles.buttonWide}
            mode="contained"
            onPress={navigateToMeditationAudio}
            disabled={!selectedOption}
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
    backgroundColor: '#E7D6FF',
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
    fontSize: 28,
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
  selectedButton: {
    borderColor: '#B28BEB',
    borderWidth: 3,
  },
  buttonWide: {
    marginTop: 10,
    width: 330,
    borderRadius: 20,
    padding: 3,
    alignSelf: 'center',
    backgroundColor: '#B28BEB',
  },
  divider: {
    marginTop: 35,
    backgroundColor: '#E8E8E8',
    height: 2.5,
  },
});

export default BasicMeditationScreen;
