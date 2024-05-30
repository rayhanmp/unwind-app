import { StyleSheet, Text, ScrollView, Image, Dimensions} from 'react-native';
import { Button } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import intro1 from "../../assets/Intro1.png"
import { Title } from 'react-native-paper';


const { width, height } = Dimensions.get('window');

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 3000);
  const router = useRouter()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}> Have a more {'\n'} productive break! </Title>
      <Text style={styles.subtitle}> Unwind helps you take break that {'\n'}rewards and refresh you! </Text>
      <Image source={intro1} style={styles.banner}/>
      <Button style={styles.buttonWide} mode="contained" onPress={()=>{router.push("/register")}}>
        SIGN UP
      </Button>
      {/* <Button style={styles.buttonWide} mode="contained" onPress={()=>{router.push("/home")}}>
        [TESTING] home button
      </Button> */}
      <Link href="/login" style={styles.smallText}>ALREADY HAVE AN ACCOUNT? LOG IN</Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F8F7F3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height * 0.10,
    paddingHorizontal: width * 0.1,
  },
  banner : {
    maxHeight: 408,
    width: width * 0.8,
    borderRadius: 20,
  },
  title : {
    fontSize: 24,
    color : '#2A1735',
    fontWeight: '800',
    fontSize: 30,
    textAlign: 'center',
  },
  buttonWide: {
    marginTop: 40,
    width: 330,
    borderRadius: 20,
    padding: 3,
    alignSelf: 'center',
    backgroundColor: '#B28BEB',
  },
  subtitle : {
    fontSize: 16,
    color : '#BBB9B5',
    fontWeight : '500',
    textAlign: 'center',
    marginTop : 5,
    marginBottom: 20
  },
  smallText : {
    textAlign: 'center', 
    marginTop: 15, 
    color: '#BBB9B5', 
    fontSize:14
  }
});
