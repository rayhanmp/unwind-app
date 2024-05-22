import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { Button } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import intro1 from "../../assets/Intro1.png"
import { Title } from 'react-native-paper';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 3000);
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Title style={styles.title}> Have a more {'\n'} productive break! </Title>
      <Text style={styles.subtitle}> Unwind helps you take break that {'\n'}rewards and refresh you! </Text>
      <Image source={intro1} style={{width: '100%', height: 408, borderRadius: 15}}/>
      <Button style={styles.buttonWide} mode="contained" onPress={()=>{router.push("/register")}}>
        SIGN UP
      </Button>
      <Link href="/login" style={{textAlign: 'center', marginTop: 15, color: '#BBB9B5', fontSize:14}}>ALREADY HAVE AN ACCOUNT? LOG IN</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7F3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  logo : {
    height: 200,
    width:200
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
    marginBottom : 20,
    
  }
});
