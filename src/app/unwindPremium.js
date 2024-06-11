import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, ImageBackground, Image } from 'react-native';
import { Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import PremiumBackground from '../../assets/premiumBackground.png'; 
import StarIcon from '../../assets/starIcon.png';
import { Ionicons } from '@expo/vector-icons'; 

const PIXEL3A_WIDTH = 394;

const { width, height } = Dimensions.get('window');
const scaleFont = (size) => (width / PIXEL3A_WIDTH) * size;

const Header = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('settings')}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Title style={styles.title}>Upgrade Your Experience</Title>
      </View>
    );
  };

const PremiumSubscriptionScreen = () => {

  return (
    <ImageBackground source={PremiumBackground} style={styles.background}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Unwind Premium</Text>
          <View style={styles.featureContainer}>
            <Image source={StarIcon} style={styles.starIcon} />
            <Text style={styles.featureText}>No more ADS!</Text>
          </View>
          <View style={styles.featureContainer}>
            <Image source={StarIcon} style={styles.starIcon} />
            <Text style={styles.featureText}>No word limit for journals</Text>
          </View>
          <View style={styles.featureContainer}>
            <Image source={StarIcon} style={styles.starIcon} />
            <Text style={styles.featureText}>More audios!</Text>
          </View>
        </View>
        <Text style={styles.selectPlanText}>SELECT PLAN</Text>
        <View style={styles.planContainer}>
          <View style={styles.popularBox}>
            <Text style={styles.planHeaderText}>Popular</Text>
          </View>
          <View style={styles.planBox}>
            <Text style={styles.planTypeText}>Monthly</Text>
            <Text style={styles.planPriceText}>$10</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.planContainer}>
          <View style={styles.planBox}>
            <Text style={styles.planTypeText}>Weekly</Text>
            <Text style={styles.planPriceText}>$3</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.planContainer}>
          <View style={styles.planBox}>
            <Text style={styles.planTypeText}>Yearly</Text>
            <Text style={styles.planPriceText}>$100</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#7D4DB4',
  },
  headerContainer: {
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  headerText: {
    padding: 40,
    fontSize: 46,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  featureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  starIcon: {
    width: 20,
    height: 24,
    marginRight: 10,
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  selectPlanText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7D4DB4',
    textAlign: 'center',
    marginVertical: 20,
  },
  planContainer: {
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  popularBox: {
    position: 'absolute',
    top: -20,
    backgroundColor: '#F2AD72',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 20,
    zIndex: 1,
  },
  planHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  planBox: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    paddingHorizontal: 50,
    alignItems: 'center',
    borderColor: '#7D4DB4',
    borderWidth: 2,
  },
  planTypeText: {
    fontSize: 16,
    color: '#7D4DB4',
    marginBottom: 10,
  },
  planPriceText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#7D4DB4',
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: '#B28BEB',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 80,
  },
  buyButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    width: '100%',
    height: height * 0.1,
    paddingTop: height * 0.03,
    backgroundColor: '#F8F7F3',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#BBB9B5',
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: scaleFont(20),
    textAlign: 'center',
    marginLeft: 43,
  },
});

export default PremiumSubscriptionScreen;
