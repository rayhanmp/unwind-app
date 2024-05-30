import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Navbar from './components/navbar';
import { useRouter } from "expo-router";

// Import illustrations
import DefaultIllustration from '../../assets/noActivity.png';
import ActivityIllustration from '../../assets/worked.png';
import WorkIllustration from '../../assets/worked.png';
import BreakIllustration from '../../assets/breaked.png';
import JournalIllustration from '../../assets/journaled.png';
import VictoryIllustration from '../../assets/worked.png';

const mockMarkedDates = {
  '2024-05-23': { marked: true, dotColor: '#7D4DB4' },
  '2024-05-24': { marked: true, dotColor: '#7D4DB4' },
};

const mockActivities = {
  '2024-05-23': [
    { time: '12:00', type: 'work', description: 'Worked for 50 minutes' },
    { time: '12:50', type: 'break', description: 'Took a 20 minute break' },
    { time: '13:10', type: 'journal', description: 'Wrote 165 words in your journal! Amazing!' },
    { time: '14:00', type: 'victory', description: 'Finished Application Architecture Assignment and took my cat to the vet' },
  ],
  '2024-05-24': [
    { time: '12:00', type: 'work', description: 'Worked for 50 minutes' },
    { time: '12:50', type: 'break', description: 'Took a 20 minute break' },
    { time: '13:10', type: 'journal', description: 'Wrote 165 words in your journal! Amazing!' },
  ],
};

const HistoryScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activities, setActivities] = useState([]);
  const [markedDates, setMarkedDates] = useState(mockMarkedDates);
  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7));

  useEffect(() => {
    fetchActivities();
  }, [selectedDate]);

  const fetchActivities = () => {
    if (!selectedDate) return;
    setActivities(mockActivities[selectedDate] || []);
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const getDayComponent = ({ date, state }) => {
    const isSelected = selectedDate === date.dateString;
    const isToday = new Date().toISOString().slice(0, 10) === date.dateString;
    const hasActivity = markedDates[date.dateString];

    let backgroundColor = 'transparent';
    let textColor = '#2D4150';
    let outlineColor = 'transparent';
    let outlineWidth = 1;

    if (isSelected) {
      if (isToday) {
        backgroundColor = '#F2AD72';
        textColor = '#FFFFFF';
        outlineColor = '#C67133';
      } else if (hasActivity) {
        backgroundColor = '#B28BEB';
        textColor = '#FFFFFF';
        outlineColor = '#7D4DB4';
      } else {
        backgroundColor = '#FFFFFF';
        textColor = '#B28BEB';
        outlineColor = '#7D4DB4';
      }
      outlineWidth = 3;
    } else if (isToday) {
      backgroundColor = '#F2AD72';
      textColor = '#FFFFFF';
    } else if (hasActivity) {
      backgroundColor = '#B28BEB';
      textColor = '#FFFFFF';
    } else {
      backgroundColor = '#FFFFFF';
      textColor = '#B28BEB';
    }

    return (
      <TouchableOpacity onPress={() => handleDayPress(date)}>
        <View style={[styles.dayContainer, { backgroundColor, borderColor: outlineColor, borderWidth: outlineWidth }]}>
          <Text style={[styles.dayText, { color: textColor }, state === 'disabled' && styles.disabledDayText]}>
            {date.day}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderActivityCard = () => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const options = { day: '2-digit', month: 'long', year: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    };

    if (activities.length === 0) {
      return (
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>{formatDate(selectedDate)}</Text>
          </View>
          <View style={styles.cardBody}>
            <Image source={DefaultIllustration} style={styles.illustrationNoActivity} />
            <Text style={styles.noActivityText}>Uh oh! You didn't</Text>
            <Text style={styles.noActivityText}>do anything...</Text>
          </View>
        </View>
      );
    }
    
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>{formatDate(selectedDate)}</Text>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.lineContainer}>
            <View style={[styles.verticalLine, { height: activities.length * 80 }]} />
              <View>
                {activities.map((activity, index) => (
                  <View key={index} style={styles.activityContainer}>
                    <Text style={styles.cardTime}>{activity.time}</Text>
                    <Image
                      source={
                        activity.type === 'work'
                        ? WorkIllustration
                        : activity.type === 'break'
                        ? BreakIllustration
                        : activity.type === 'journal'
                        ? JournalIllustration
                        : activity.type === 'victory'
                        ? VictoryIllustration
                        : ActivityIllustration
                      }
                      style={styles.illustration}
                      />
                    <Text style={styles.activityText}>{activity.description}</Text>
                  </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
    );
  };

  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.calendarContainer}>
        <Button
        title="Go to Home (Testing)"
        onPress={() => router.push('/home')}
      />
          <Calendar
            current={month}
            onDayPress={handleDayPress}
            markedDates={markedDates}
            dayComponent={getDayComponent}
            onMonthChange={(month) => setMonth(month.dateString.slice(0, 7))}
            theme={{
              calendarBackground: '#F8F7F3',
              monthTextColor: '#7D4DB4',
              textMonthFontWeight: 'bold',
              textMonthFontSize: 28,
              textDayFontSize: 8,
              textSectionTitleColor: '#B28BEB',
              selectedDayBackgroundColor: '#7D4DB4',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#F4991A',
              dayTextColor: '#2D4150',
              textDisabledColor: '#d9e1e8',
              arrowColor: '#7D4DB4',
            }}
          />
        </View>
        <View style={styles.activitiesContainer}>
          {renderActivityCard()}
        </View>
      </ScrollView>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7F3',
  },
  calendarContainer: {
    paddingTop: 70,
  },
  dayContainer: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 18,
  },
  dayText: {
    fontSize: 16,
    color: '#2D4150',
  },
  disabledDayText: {
    color: '#d9e1e8',
  },
  activitiesContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    paddingBottom: 25,
    marginTop: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
  },
  cardHeader: {
    width: '100%',
    backgroundColor: '#F2AD72',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
  },
  cardHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cardBody: {
    width: '100%',
    padding: 15,
    alignItems: 'center'
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  verticalLine: {
    width: 2,
    backgroundColor: '#E0E0E0',
    marginRight: 10,
  },
  activityContainer: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTime: {
    fontSize: 12,
    color: '#666',
    marginRight: 10,
  },
  illustration: {
    width: 71,
    height: 70,
    marginRight: 10,
  },
  activityText: {
    fontSize: 14,
    color: '#2D4150',
    maxWidth: '60%', // Adjust this value as needed
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  illustrationNoActivity: {
    width: 130,
    height: 110,
    marginBottom: 25,
    marginTop: 25,
  },
  noActivityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#BBB9B5',
  }
});

export default HistoryScreen;
