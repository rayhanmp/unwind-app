import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Navbar from './components/navbar';
import { useRouter } from "expo-router";
import { FIREBASE_DB } from '../../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

// Import illustrations
import DefaultIllustration from '../../assets/noActivity.png';
import WorkIllustration from '../../assets/worked.png';
import BreakIllustration from '../../assets/breaked.png';
import JournalIllustration from '../../assets/journaled.png';
import MeditationIllustration from '../../assets/meditated.png';
import WalkingIllustration from '../../assets/walked.png';

const HistoryScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activities, setActivities] = useState([]);
  const [markedDates, setMarkedDates] = useState({});
  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7));

  useEffect(() => {
    fetchMarkedDates();
  }, [month]);

  useEffect(() => {
    fetchActivities();
  }, [selectedDate]);

  const fetchMarkedDates = async () => {
    const startOfMonth = new Date(`${month}-01`);
    const endOfMonth = new Date(`${month}-31`);
    const q = query(collection(FIREBASE_DB, 'workSession'), where('date', '>=', startOfMonth), where('date', '<=', endOfMonth));
    const querySnapshot = await getDocs(q);
    const newMarkedDates = {};
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const dateStr = data.date.toDate().toISOString().slice(0, 10);
      newMarkedDates[dateStr] = { marked: true, dotColor: '#7D4DB4' };
    });
    setMarkedDates(newMarkedDates);
  };

  const fetchActivities = async () => {
    if (!selectedDate) return;
    const selectedDateStart = new Date(selectedDate);
    selectedDateStart.setHours(0, 0, 0, 0);
    const selectedDateEnd = new Date(selectedDate);
    selectedDateEnd.setHours(23, 59, 59, 999);
    const q = query(
      collection(FIREBASE_DB, 'workSession'),
      where('date', '>=', selectedDateStart),
      where('date', '<=', selectedDateEnd)
    );
    const querySnapshot = await getDocs(q);
    const newActivities = [];
    querySnapshot.forEach((doc) => {
      newActivities.push(doc.data());
    });
    console.log(`Fetched activities for ${selectedDate}:`, newActivities);
    setActivities(newActivities);
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

    const addMinutesToTime = (date, minutes) => {
      console.log(`Original date: ${date}`);
      let newDate = new Date(date);
      newDate.setMinutes(newDate.getMinutes() + minutes);
      console.log(`New date after adding ${minutes} minutes: ${newDate}`);
      return newDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    // Group activities by date
    const groupedActivities = activities.reduce((acc, activity) => {
      const dateStr = activity.date.toDate().toISOString().slice(0, 10);
      if (!acc[dateStr]) {
        acc[dateStr] = [];
      }
      acc[dateStr].push(activity);
      return acc;
    }, {});

    // Handle the case where there are no activities
    if (selectedDate && !groupedActivities[selectedDate]) {
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

    return Object.keys(groupedActivities).map((dateStr, index) => {
      const dateActivities = groupedActivities[dateStr];
      const lineHeight = dateActivities.length * 360; // Adjust the multiplier based on your design

      return (
        <View key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>{formatDate(dateStr)}</Text>
          </View>
          <View style={styles.cardBody}>
            <View style={styles.lineContainer}>
              <View style={[styles.verticalLine, { height: lineHeight }]} />
              <View>
                {dateActivities.map((activity, idx) => (
                  <View key={idx}>
                    <View style={styles.activityContainer}>
                      <Text style={styles.cardTime}>
                        {new Date(activity.date.toDate()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </Text>
                      <Image source={WorkIllustration} style={styles.illustration} />
                      <Text style={styles.activityText}>
                        Worked for {activity.workDuration} minutes
                      </Text>
                    </View>
                    <View style={styles.victoryContainer}>
                      <Text style={styles.victoryTitle}>Your Victories 🎉</Text>
                      <Text style={styles.victoryText}>{activity.reflection}</Text>
                    </View>
                    <View style={styles.activityContainer}>
                      <Text style={styles.cardTime}>
                        {addMinutesToTime(activity.date.toDate(), parseInt(activity.workDuration,10) + parseInt(activity.breakDuration,10))}
                      </Text>
                      <Image source={BreakIllustration} style={styles.illustration} />
                      <Text style={styles.activityText}>
                        Took a {activity.breakDuration} minute break
                      </Text>
                    </View>
                    <View style={styles.activityContainer}>
                      {renderActivityDetails(activity)}
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      );
    });
  };

  const renderActivityDetails = (activity) => {
    const workDuration = parseInt(activity.workDuration, 10);
    const breakDuration = parseInt(activity.breakDuration, 10);

    const addMinutesToTime = (date, minutes) => {
      let newDate = new Date(date);
      newDate.setMinutes(newDate.getMinutes() + minutes);
      return newDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    switch (activity.activityType) {
      case 'journal':
        return (
          <>
            <Text style={styles.cardTime}>
              {addMinutesToTime(activity.date.toDate(), workDuration + breakDuration)}
            </Text>
            <Image source={JournalIllustration} style={styles.illustration} />
            <Text style={styles.activityText}>
              Wrote {activity.journalContent.split(' ').length} words in your journal! Amazing!
            </Text>
          </>
        );
      case 'meditation':
        return (
          <>
            <Text style={styles.cardTime}>
              {addMinutesToTime(activity.date.toDate(), workDuration + breakDuration)}
            </Text>
            <Image source={MeditationIllustration} style={styles.illustrationMeditation} />
            <Text style={styles.activityText}>
              Meditated for {activity.breakDuration} minutes!
            </Text>
          </>
        );
      case 'walking':
        return (
          <>
            <Text style={styles.cardTime}>
              {addMinutesToTime(activity.date.toDate(), workDuration + breakDuration)}
            </Text>
            <Image source={WalkingIllustration} style={styles.illustration} />
            <Text style={styles.activityText}>
              Walked for {activity.breakDuration} minutes!
            </Text>
          </>
        );
      default:
        return null;
    }
  };

  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.calendarContainer}>
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
        <View style={styles.activitiesContainer}>{renderActivityCard()}</View>
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
    alignItems: 'center',
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
  illustrationMeditation: {
    width: 71,
    height: 70,
    marginRight: 10,
    marginLeft: 5,
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
  },
  victoryTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  victoryText: {
    fontSize: 14,
  },
  victoryContainer: {
    marginBottom: 16,
    marginLeft: 40,
    alignItems: 'baseline',
    backgroundColor: '#F1EDDF',
    borderRadius: 10,
    padding: 20,
  },
});

export default HistoryScreen;
