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
      <Text> Unwind helps you take break that rewards and refresh you! </Text>
      <Image source={intro1} />
      <Button style={styles.buttonWide} mode="contained" onPress={()=>{router.push("/register")}}>
        SIGN UP
      </Button>
      <Link href="/login">ALREADY HAVE AN ACCOUNT? LOG IN</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7F3',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: 10,
    width: 330,
    borderRadius: 20,
    padding: 3,
    alignSelf: 'center',
    backgroundColor: '#B28BEB',
  },
  subtitle : {
    fontSize: 36,
    color : '#9768CD',
    fontWeight : 'bold',
    marginBottom : 30
  }
});
