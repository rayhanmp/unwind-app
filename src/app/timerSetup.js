import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import timerSetupIllust from '../../assets/timerSetupIllust.png';
import { useNavigation } from '@react-navigation/native';

const TimerSetupScreen = () => {
  const navigation = useNavigation();
  const [workTime, setWorkTime] = useState(10); // time in seconds
  const [breakTime, setBreakTime] = useState(10); // time in seconds (10 minutes)

  const decreaseTime = (type) => {
    if (type === 'work') {
      if (workTime > 300) { // If workTime is greater than 5 minutes (300 seconds)
        setWorkTime(workTime - 300); // Decrease by 5 minutes (300 seconds)
      } else {
        setWorkTime(300); // Set it to 5 minutes (300 seconds)
      }
    } else {
      if (breakTime > 300) {
        setBreakTime(breakTime - 300);
      } else {
        setBreakTime(300);
      }
    }
  };

  const increaseTime = (type) => {
    if (type === 'work') {
      setWorkTime(workTime + 300); // Increase by 5 minutes (300 seconds)
    } else {
      setBreakTime(breakTime + 300); // Increase by 5 minutes (300 seconds)
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.container}>
      <Image
        source={timerSetupIllust} // Update this path to your illustration file
        style={styles.illustration}
      />
      <Text style={styles.timerText}>Set Work Time</Text>
      <View style={styles.timerContainer}>
        <View style={styles.timeControl}>
          <Pressable onPress={() => decreaseTime('work')} style={styles.button}>
            <Text style={styles.buttonText}>◀</Text>
          </Pressable>
          <Text style={styles.timeText}>{formatTime(workTime)}</Text>
          <Pressable onPress={() => increaseTime('work')} style={styles.button}>
            <Text style={styles.buttonText}>▶</Text>
          </Pressable>
        </View>
      </View>
      <Text style={styles.timerText}>Set Break Time</Text>
      <View style={styles.timerContainer}>
        <View style={styles.timeControl}>
          <Pressable onPress={() => decreaseTime('break')} style={styles.button}>
            <Text style={styles.buttonText}>◀</Text>
          </Pressable>
          <Text style={styles.timeText}>{formatTime(breakTime)}</Text>
          <Pressable onPress={() => increaseTime('break')} style={styles.button}>
            <Text style={styles.buttonText}>▶</Text>
          </Pressable>
        </View>
      </View>
      <Pressable 
        style={styles.startButton} 
        onPress={() => {
          const startTime = new Date();
          navigation.navigate('timerRunning', { workTime, breakTime, startTime });
        }}
      >
        <Text style={styles.startButtonText}>LET'S START!</Text>
      </Pressable>
      <Pressable style={styles.cancelButton}
      onPress={() => navigation.navigate('history')}>
        <Text style={styles.cancelButtonText}>CANCEL</Text>
      </Pressable>
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
  illustration: {
    width: 270, // Adjust the width and height as needed
    height: 270,
    marginBottom: 40, // Space between the illustration and the timer text
  },
  timerContainer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center', // Align items both horizontally and vertically
    backgroundColor: 'white', // Set background color to white
    borderRadius: 10, // Adjust border radius to give rounded edges
    width: '80%', // Adjust width as needed
    height: 100
  },
  timerText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 0,
    fontWeight: 'bold',
  },
  timeControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Align items both horizontally and vertically
  },
  button: {
    marginHorizontal: 20,
    borderWidth: 0, 
  },
  buttonText: {
    fontSize: 32,
    color: '#7D4DB4',
  },
  timeText: {
    fontSize: 70,
    color: '#2A1735',
    fontWeight: 'bold'
  },
  startButton: {
    backgroundColor: '#B28BEB',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 20,
    width: 350
  },
  startButtonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  cancelButton: {
    borderColor: '#C7A4FF',
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 10,
    width: 350
  },
  cancelButtonText: {
    color: '#C7A4FF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default TimerSetupScreen;
