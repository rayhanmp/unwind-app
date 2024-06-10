import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';
import { useNavigation, useRoute } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import meditationAudioBg from '../../assets/meditationAudioBg.png';
import { Ionicons } from '@expo/vector-icons';

export default function MeditationAudio() {
  const route = useRoute();
  const navigation = useNavigation();
  const { workTime, breakTime, startTime, chosenActivity, audioOption } = route.params;

  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(breakTime);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const timerRef = useRef(null);

  const audioFiles = {
    maleTutor: require('../../assets/maletutor.mp3'),
    femaleTutor: require('../../assets/femaletutor.mp3'),
    ambiance: require('../../assets/ambiance.mp3'),
    silence: require('../../assets/silence.mp3'),
  };

  useEffect(() => {
    async function loadSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(audioFiles[audioOption]);
      setSound(sound);
      
      sound.setOnPlaybackStatusUpdate(updatePlaybackStatus);
    }

    loadSound();

    return () => {
      if (sound) {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
    };
  }, [audioOption]);

  const updatePlaybackStatus = (status) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
    }
  };

  const playPauseSound = async () => {
    if (isPlaying) {
      console.log('Pausing Sound');
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      console.log('Playing Sound');
      await sound.playAsync();
      sound.setIsLoopingAsync(true);
      setIsPlaying(true);
    }
  };

  const skipForward = () => {
    if (sound) {
      sound.setPositionAsync(position + 15000);
    }
  };

  const skipBackward = () => {
    if (sound) {
      sound.setPositionAsync(position - 15000);
    }
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(timerRef.current);
      if (sound) {
        sound.stopAsync().then(() => {
          sound.unloadAsync();
        });
      }
      navigation.navigate('doneActivity', { workTime, breakTime, startTime, chosenActivity });
    }
  }, [timeLeft]);

  const handleDonePress = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
    }
    navigation.navigate('doneActivity', { workTime, breakTime, startTime, chosenActivity });
  };

  return (
    <ImageBackground source={meditationAudioBg} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.breakTimeText}>BREAK TIME</Text>
        <Text style={styles.timeText}>{new Date(timeLeft * 1000).toISOString().substr(14, 5)}</Text>
        
        <View style={styles.controls}>
          <TouchableOpacity onPress={skipBackward}>
            <View style={styles.iconContainer}>
              <Ionicons name="play-back-outline" size={40} color="#B28BEB" />
            </View>
            <Text style={styles.skipText}>15</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={playPauseSound}>
            <View style={styles.iconContainer}>
              <Ionicons name={isPlaying ? "pause-circle" : "play-circle"} size={80} color="#B28BEB" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={skipForward}>
            <View style={styles.iconContainer}>
              <Ionicons name="play-forward-outline" size={40} color="#B28BEB" />
            </View>
            <Text style={styles.skipText}>15</Text>
          </TouchableOpacity>
        </View>
        
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={breakTime * 1000}
          value={position}
          onValueChange={(value) => sound.setPositionAsync(value)}
          minimumTrackTintColor="#B28BEB"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#B28BEB"
        />

        <View style={styles.timeLabels}>
          <Text style={styles.timeLabel}>0:00</Text>
          <Text style={styles.timeLabel}>{new Date(breakTime * 1000).toISOString().substr(14, 5)}</Text>
        </View>

        <TouchableOpacity style={styles.doneButton} onPress={handleDonePress}>
          <Text style={styles.doneText}>DONE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    paddingHorizontal: 20,
  },
  breakTimeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B28BEB',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#7D4DB4',
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  skipText: {
    color: '#B28BEB',
    fontSize: 12,
    textAlign: 'center',
  },
  slider: {
    width: '90%',
    height: 40,
  },
  timeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  timeLabel: {
    color: '#B28BEB',
  },
  doneButton: {
    width: '90%',
    padding: 15,
    backgroundColor: '#B28BEB',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  doneText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});
