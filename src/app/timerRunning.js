import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import timerRunningIllust from '../../assets/timerRunningIllust.png';
import QuitModal from './components/quitModal'; // Adjust the path according to your folder structure

const TimerRunning = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { workTime, breakTime, startTime } = route.params;
  const [secondsLeft, setSecondsLeft] = useState(workTime);
  const [isRunning, setIsRunning] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const handleNavigation = useCallback(() => {
    navigation.navigate('timerDone', { workTime, breakTime, startTime });
  }, [navigation, workTime, breakTime, startTime]);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSecondsLeft((seconds) => {
          if (seconds > 0) {
            return seconds - 1;
          } else {
            clearInterval(interval);
            handleNavigation();
            return 0;
          }
        });
      }, 1000);
    } else if (!isRunning && secondsLeft !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft, navigation]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleQuit = () => {
    setIsRunning(false);
    setModalVisible(false);
    navigation.navigate('timerSetup'); // Navigate back to the main screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(secondsLeft)}</Text>
      <Text style={styles.motivationalText}>Don't give up!</Text>
      <Image
        source={timerRunningIllust} // Update this path to your illustration file
        style={styles.illustration}
      />
      <TouchableOpacity style={styles.quitButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.quitButtonText}>QUIT</Text>
      </TouchableOpacity>

      <QuitModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onQuit={handleQuit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F7F3', // Light beige background color
  },
  timerText: {
    fontSize: 85,
    color: '#2A1735',
    fontWeight: 'bold',
    marginBottom: 5
  },
  motivationalText: {
    fontSize: 20,
    color: '#7D4DB4',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  illustration: {
    width: 270, // Adjust the width and height as needed
    height: 270,
    marginBottom: 80, // Space between the illustration and the quit button
  },
  quitButton: {
    borderColor: '#C7A4FF',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 10,
    width: 350
  },
  quitButtonText: {
    color: '#C7A4FF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default TimerRunning;
