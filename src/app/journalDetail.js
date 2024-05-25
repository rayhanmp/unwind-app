import { ScrollView, View, Text, StyleSheet } from "react-native"
import Navbar from "./components/navbar"
export default function JournalDetail(){
    return(
        <View style={styles.container}>
            <View>
                <Text>Testing</Text>
            </View>
            <ScrollView styles={styles.scrollViewContent}>
                <Text>Testing</Text>
            </ScrollView>
            <Navbar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F1EDDF',
    },
    scrollViewContent: {
      paddingBottom: 120, // Ensure there is some padding at the bottom to make the scrolling smoother
    },
  });