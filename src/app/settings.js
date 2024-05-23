import * as React from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, TextInput} from 'react-native'; 
import { Button, Modal, Portal, PaperProvider } from 'react-native-paper';
import Navbar from './components/navbar';
import { Title } from 'react-native-paper';
import premiumPromotion from "../../assets/premiumPromotion.png";
import editIcon from "../../assets/editIcon.png";
import workSessionRecord from "../../assets/workSessionRecord.png";
import wordWrittenJournalRecord from "../../assets/wordWrittenJournalRecord.png";
import walkingSessionRecord from "../../assets/walkingSessionRecord.png";
import meditationSessionRecord from "../../assets/meditationSessionRecord.png";
import Appstyles from './components/Appstyles';

export default function Setting() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={styles.container}>
      <PaperProvider>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
            <Text style={styles.modalTitle}>Change Login Information</Text>
            <TextInput placeholder="Username" style={styles.modalTextInput}></TextInput>
            <TextInput placeholder="Old Password" style={styles.modalTextInput}></TextInput>
            <TextInput placeholder="New Password" style={styles.modalTextInput}></TextInput>
            <TextInput placeholder="Confirm New Password" style={styles.modalTextInput}></TextInput>
            <Button style={styles.buttonWideRegular} mode="contained" onPress={hideModal}>CONFIRM</Button>
            <Button style={styles.buttonWideOutlineRegular} mode="contained" onPress={hideModal}><Text style={{color: '#B28BEB'}}>CANCEL</Text></Button>
          </Modal>
        </Portal>

      <View style={styles.header}>
        <Title style={styles.title}>Profile & Settings</Title>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.section}>
          <Text style={styles.h2}>Login Information</Text>
          <TouchableOpacity onPress={showModal}>
            <Image source={editIcon} style={styles.editIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.loginInformation}>
          <Text style={styles.h3}>Username</Text>
          <Text style={styles.loginContent}>Void</Text>
          <Text style={styles.h3}>Password</Text>
          <Text style={styles.loginContent}>************</Text>
        </View>
        <TouchableOpacity style={styles.premiumPromotion}>
          <Image source={premiumPromotion} style={styles.promotionImage} />
          <View style={styles.premiumPromotionContent}>
            <Text style={styles.h3Black}>Looking to get more features?</Text>
            <Text style={styles.promotionText}>Check out unwind premium!</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.recordContainer}>
          <Text style={styles.h2}>My Records</Text>
          <View style={styles.recordButtonContainer}>
            <TouchableOpacity>
              <ImageBackground source={workSessionRecord} style={styles.recordButton}>
                <Text style={styles.h3Black}>3</Text>
                <Text style={styles.recordText}>Recorded work sessions</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground source={wordWrittenJournalRecord} style={styles.recordButton}>
                <Text style={styles.h3Black}>1073</Text>
                <Text style={styles.recordText}>Words written in journals</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground source={meditationSessionRecord} style={styles.recordButton}>
                <Text style={styles.h3Black}>1</Text>
                <Text style={styles.recordText}>Recorded meditation sessions</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity>
              <ImageBackground source={walkingSessionRecord} style={styles.recordButton}>
                <Text style={styles.h3Black}>2</Text>
                <Text style={styles.recordText}>Recorded walking sessions</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.dangerContainer}>
          <Text style={styles.h2Red}>Danger Zone</Text></View>
        <View style={styles.dangerContent}>
        <Button style={styles.buttonWideDanger} mode="contained" onPress={() => console.log("clicked")}>LOGOUT</Button> 
        <Button style={styles.buttonWideOutlineDanger} mode="contained" onPress={() => console.log("clicked")}><Text style={{color:'#D75D5D'}}>DELETE ACCOUNT</Text></Button> 

          </View>
      </ScrollView>
      <Navbar style={Appstyles.navbar} />
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7F3',
  },
  scrollViewContent: {
    paddingBottom: 100, // Ensure there is some padding at the bottom to make the scrolling smoother
  },
  header: {
    width: '100%',
    height: 100,
    paddingTop: 25,
    top:0,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#F8F7F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#BBB9B5',
  },
  title: {
    fontWeight: 'bold',
  },
  section: {
    marginTop: 125,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
  },
  editIcon: {
    marginLeft: 10,
    height: 20,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  h2Red: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#B63939',
  },
  h3: {
    marginBottom: 10,
    color: '#919191',
  },
  h3Black: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2A1735',
  },
  loginContent: {
    color: '#2A1735',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loginInformation: {
    padding: 20,
    margin: 20,
    borderRadius: 15,
    backgroundColor: '#F1EDDF',
  },
  premiumPromotion: {
    margin: 20,
    marginTop: 0,
    borderRadius: 15,
    backgroundColor: '#F1EDDF',
  },
  premiumPromotionContent: {
    padding: 20,
  },
  promotionImage: {
    width: '100%',
    height: 95,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  promotionText: {
    marginTop: -10,
    marginBottom: 5,
  },
  recordContainer: {
    marginTop: -20,
    padding: 20,
  },
  recordButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  recordButton: {
    width: 163,
    height: 142,
    padding: 20,
    margin: 5,
    borderRadius: 10,
  },
  recordText: {
    marginTop: -5,
  },
  dangerContainer: {
    padding: 20,
    marginTop: -20,
  },
  dangerContent: {
    padding: 20,
    margin: 20,
    marginTop: 0,
    borderRadius: 15,
    backgroundColor: '#F8F7F3',
    borderColor: '#BBB9B5',
    borderWidth: 2,
  },
    buttonWideDanger: {
    width: 330,
    borderRadius: 20,
    padding: 3,
    alignSelf: 'center',
    backgroundColor: '#D75D5D',
  },
  buttonWideOutlineDanger: {
    marginTop: 10,
    width: 330,
    borderRadius: 20,
    padding: 3,
    alignSelf: 'center',
    borderColor: '#D75D5D',
    borderWidth: 3,
    backgroundColor: '#F8F7F3',
    color: '#000',
  },
  buttonWideRegular: {
    width: '100%',
    borderRadius: 20,
    padding: 3,
    alignSelf: 'center',
    backgroundColor: '#B28BEB',
    marginTop: 15,
  },
  buttonWideOutlineRegular: {
    marginTop: 10,
    width: '100%',
    borderRadius: 20,
    padding: 3,
    alignSelf: 'center',
    borderColor: '#B28BEB',
    borderWidth: 3,
    backgroundColor: '#F8F7F3',
    color: '#000',
  },
  modal: {
    backgroundColor: '#F8F7F3',
    padding: 20,
    margin: 20,
    borderRadius: 15,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalTextInput: {
    backgroundColor: '#F1EDDF',
    padding: 10,
    paddingLeft: 15,
    margin: 5,
    borderRadius: 10,
  },
});
