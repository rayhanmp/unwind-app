import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import timerDoneIllust from '../../assets/timerDoneIllust.png';

const TimerDone = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { workTime, breakTime, startTime } = route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.breakText}>Break Starts!</Text>
        <Image
          source={timerDoneIllust} // Update this path to your illustration file
          style={styles.illustration}
        />
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('pickActivities', { workTime, breakTime, startTime })}>
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#B28BEB', // Light beige background color
    },
    breakText: {
      fontSize: 40,
      color: '#FFF',
      fontWeight: 'bold',
      marginBottom: 55,
    },
    illustration: {
      width: 270, // Adjust the width and height as needed
      height: 270,
      marginBottom: 55, // Space between the illustration and the quit button
    },
    continueButton: {
        backgroundColor: '#FFF',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 25,
        marginTop: 20,
        width: 350
    },
    continueButtonText: {
        color: '#B28BEB',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
  });
  
  export default TimerDone;
  