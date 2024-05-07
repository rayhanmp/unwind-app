import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { Button } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import intro1 from "../assets/Intro1.png"

export default function App() {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 3000);
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text> Header </Text>
      <Text> Subtitle </Text>
      <Image source={intro1} />
      <Button mode="contained" onPress={()=>{router.push("/register")}}>
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
    color : '#9768CD',
  },
  subtitle : {
    fontSize: 36,
    color : '#9768CD',
    fontWeight : 'bold',
    marginBottom : 30
  }
});
