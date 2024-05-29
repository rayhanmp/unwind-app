import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

// Import images for different activities
import WalkingImage from '../../assets/doneWalking.png';
import MeditationImage from '../../assets/doneMeditation.png';
import JournalingImage from '../../assets/doneJournaling.png';
import SemicircleImage from '../../assets/semicircle.png';

const ReflectionScreen = () => {
  const route = useRoute();
  const { activity, user } = route.params;
  const [reflection, setReflection] = useState('');

  // Select image based on activity
  const activityImages = {
    walking: WalkingImage,
    meditation: MeditationImage,
    journaling: JournalingImage,
  };

  const handleFinish = () => {
    // Handle reflection submission logic
    console.log('Reflection submitted:', reflection);
    // Navigate to another screen or give feedback to the user
  };

  return (
    <View style={styles.container}>
      <Image source={SemicircleImage} style={styles.semicircleImage} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Good job, {user}</Text>
        <Text style={styles.headerText}>You have finished:</Text>
      </View>
      <Image source={activityImages[activity]} style={styles.activityImage} />
      <Text style={styles.reflectionPrompt}>Let's Reflect!</Text>
      <Text style={styles.reflectionInstruction}>Write down what you’ve achieved today!</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Today I did..."
        multiline
        value={reflection}
        onChangeText={setReflection}
      />
      <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
        <Text style={styles.finishButtonText}>FINISH</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F7F3', // Light beige background color
    padding: 30,
  },
  semicircleImage: {
    position: 'absolute',
    top: 0,
    width: 500,
    height: 285,
    resizeMode: 'cover',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F8F7F3',
  },
  subHeaderText: {
    fontSize: 18,
    color: '#F4991A',
  },
  activityImage: {
    width: 450,
    height: 225,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  activityCard: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7D4DB4',
    marginBottom: 5,
  },
  activityDescription: {
    fontSize: 16,
    color: '#666',
  },
  reflectionPrompt: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#7D4DB4',
    marginBottom: 10,
  },
  reflectionInstruction: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#BBB9B5',
    marginBottom: 15,
  },
  textInput: {
    width: '100%',
    height: 150,
    backgroundColor: 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  finishButton: {
    backgroundColor: '#B28BEB',
    paddingVertical: 15,
    paddingHorizontal: 150,
    borderRadius: 25,
  },
  finishButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ReflectionScreen;
