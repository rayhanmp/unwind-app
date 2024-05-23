import { Button } from "react-native-paper";
import { View, Text, StyleSheet, TouchableOpacity , Image} from "react-native";
import navbarCenter from "../../../assets/navbarCenter.png"
import navbarArticle from "../../../assets/navbarArticle.png"
import navbarPen from "../../../assets/navbarPen.png"
import navbarSettings from "../../../assets/navbarSettings.png"
import navbarCalendar from "../../../assets/navbarCalendar.png"
import { useRouter } from "expo-router";

export default function Navbar(){
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.centerButton}>
                <TouchableOpacity onPress={() => console.log("clicked")}>
                    <Image
                    source={navbarCenter}
                    >
                    </Image>
                </TouchableOpacity>
            </View>
            <View style={styles.navbar}>
                    <View>
                        <TouchableOpacity
                            onPress={() => {router.push("/calendar")}}
                        >
                            <Image
                                style={{  width: 28, height: 27 }}
                                source={navbarCalendar}
                            />
                    
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {router.push("pastJournal")}}
                        >
                            <Image
                                style={{  width: 28, height: 27 }}
                                source={navbarPen}
                            />
                    
                        </TouchableOpacity>
                    </View>
                    <View>
                    </View>
                    <View style={{
                        flexDirection: 'column', 
                        alignItems: 'center',
                        justifyContent:'center',
                    }}>

                        <TouchableOpacity
                            onPress={() => {router.push("/article")}}
                        >
                            <Image
                                style={{  width: 28, height: 27 }}
                                source={navbarArticle}
                            />
                    
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'column', 
                        alignItems: 'center',
                        justifyContent:'center',
                    }}>

                        <TouchableOpacity
                            onPress={() => {router.push("/settings")}}
                        >
                            <Image
                                style={{  width: 28, height: 27 }}
                                source={navbarSettings}
                            />
                    
                        </TouchableOpacity>
                    </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centerButton: {
        position: 'absolute', 
        alignSelf: 'center',
        bottom:35,
        backgroundColor: '#9768CD',
        width: 70,
        height: 70,
        borderRadius: 35,
        zIndex: 10,
        borderColor: '#F1EDDF',
        borderWidth: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        flex: 1,
        flexDirection: 'column',
        zIndex:1000
    },
    navbar: {
        alignSelf: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#F8F7F3',
        style: { marginVertical: 5 },
        bottom: 0,
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 25,
        elevation: 40,
    }
  });