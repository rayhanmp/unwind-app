import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import pickActivityWalking from '../../assets/pickActivityWalking.png';
import pickActivityMeditating from '../../assets/pickActivityMeditating.png';
import pickActivityJournalling from '../../assets/pickActivityJournalling.png';

const { width, height } = Dimensions.get('window');

const PickActivities = () => {
  const route = useRoute();
  const { workTime, breakTime, startTime } = route.params;
  const navigation = useNavigation();

  const navigateToActivity = (activity) => {
    navigation.navigate(activity, {
      chosenActivity: activity,
      workTime,
      breakTime,
      startTime
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>How would you like to {'\n'}want to spend your break?</Text>

      <View style={styles.cardContainer}>
        <Pressable
          style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
          onPress={() => navigateToActivity('walking')}
        >
          <Image source={pickActivityWalking} style={styles.cardBanner} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Walking</Text>
            <Text style={styles.cardSubtitle}>Look around and stretch!</Text>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
          onPress={() => navigateToActivity('meditation')}
        >
          <Image source={pickActivityMeditating} style={styles.cardBanner} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Meditating</Text>
            <Text style={styles.cardSubtitle}>Relax and reflect!</Text>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
          onPress={() => navigateToActivity('journaling')}
        >
          <Image source={pickActivityJournalling} style={styles.cardBanner} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Journaling</Text>
            <Text style={styles.cardSubtitle}>Write about your day!</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2AD72',
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.3,
  },
  title: {
    fontSize: 26,
    color: '#F8F7F3',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'column',
    marginTop: 25,
    alignItems: 'center',
    gap: height * 0.03,
  },
  card: {
    width: width * 0.8,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#F8F7F3',
    borderRadius: 15,
    elevation: 2,
    transform: [{ scale: 1 }],
  },
  cardPressed: {
    opacity: 0.95,
    transform: [{ scale: 0.98 }],
  },
  cardBanner: {
    width: '100%',
    height: 90,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardContent: {
    padding: 25,
    paddingTop: 15,
    paddingBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    color: '#7D4DB4',
    fontWeight: 'bold',
    marginBottom: 3,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#2A1735',
  },
});

export default PickActivities;
