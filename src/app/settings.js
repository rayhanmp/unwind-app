import * as React from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, TextInput, Dimensions, Alert } from 'react-native'; 
import { Button, Modal, Portal, Provider as PaperProvider, Title } from 'react-native-paper';
import Navbar from './components/navbar';
import premiumPromotion from "../../assets/premiumPromotion.png";
import editIcon from "../../assets/editIcon.png";
import workSessionRecord from "../../assets/workSessionRecord.png";
import wordWrittenJournalRecord from "../../assets/wordWrittenJournalRecord.png";
import walkingSessionRecord from "../../assets/walkingSessionRecord.png";
import meditationSessionRecord from "../../assets/meditationSessionRecord.png";
import { useRouter } from 'expo-router';
import { getAuth, signOut } from 'firebase/auth';

const PIXEL3A_WIDTH = 393;
const PIXEL3A_HEIGHT = 740;

const { width, height } = Dimensions.get('window');

const scaleFont = (size) => (width / PIXEL3A_WIDTH) * size;

const ModalContent = ({ visible, hideModal }) => (
  <Portal>
    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
      <Text style={styles.modalTitle}>Change Login Information</Text>
      <TextInput placeholder="Username" style={styles.modalTextInput} />
      <TextInput placeholder="Old Password" style={styles.modalTextInput} />
      <TextInput placeholder="New Password" style={styles.modalTextInput} />
      <TextInput placeholder="Confirm New Password" style={styles.modalTextInput} />
      <Button style={styles.buttonWideRegular} mode="contained" onPress={hideModal}>CONFIRM</Button>
      <Button style={styles.buttonWideOutlineRegular} mode="contained" onPress={hideModal}><Text style={{ color: '#B28BEB' }}>CANCEL</Text></Button>
    </Modal>
  </Portal>
);

const Header = () => (
  <View style={styles.header}>
    <Title style={styles.title}>Profile & Settings</Title>
  </View>
);

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.h2}>{title}</Text>
    {children}
  </View>
);

const Records = () => (
  <View style={styles.recordContainer}>
    <Text style={styles.h2}>My Records</Text>
    <View style={styles.recordButtonContainer}>
      {[
        { source: workSessionRecord, count: 3, text: "Recorded work sessions" },
        { source: wordWrittenJournalRecord, count: 1073, text: "Words written in journals" },
        { source: meditationSessionRecord, count: 1, text: "Recorded meditation sessions" },
        { source: walkingSessionRecord, count: 2, text: "Recorded walking sessions" }
      ].map((record, index) => (
        <TouchableOpacity key={index}>
          <ImageBackground source={record.source} style={styles.recordButton}>
            <Text style={styles.h3Black}>{record.count}</Text>
            <Text style={styles.recordText}>{record.text}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const DangerZone = () => {
  const auth = getAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      Alert.alert('Logout Failed', 'Failed to logout. Please try again later.');
      console.error(error);
    }
  };

  const handleDeleteAccount = () => {
    // Add your delete account logic here
    console.log('Delete account clicked');
  };

  return (
    <View style={styles.dangerContainer}>
      <Text style={styles.h2Red}>Danger Zone</Text>
      <View style={styles.dangerContent}>
        <Button style={styles.buttonWideDanger} mode="contained" onPress={handleLogout}>LOGOUT</Button> 
        <Button style={styles.buttonWideOutlineDanger} mode="contained" onPress={handleDeleteAccount}>
          <Text style={{ color: '#D75D5D' }}>DELETE ACCOUNT</Text>
        </Button> 
      </View>
    </View>
  );
};

export default function Setting() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <ModalContent visible={visible} hideModal={hideModal} />
        <Header />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Section title="Login Information">
            <TouchableOpacity onPress={showModal}>
              <Image source={editIcon} style={styles.editIcon} />
            </TouchableOpacity>
          </Section>
          <View style={styles.loginInformation}>
            <Text style={styles.h3}>Username</Text>
            <Text style={styles.loginContent}>Void</Text>
            <Text style={styles.h3}>Password</Text>
            <Text style={styles.loginContent}>************</Text>
          </View>
          <TouchableOpacity style={styles.premiumPromotion} onPress={() => router.push("/unwindPremium")}>
            <Image source={premiumPromotion} style={styles.promotionImage} />
            <View style={styles.premiumPromotionContent}>
              <Text style={styles.h3Black}>Looking to get more features?</Text>
              <Text style={styles.promotionText}>Check out unwind premium!</Text>
            </View>
          </TouchableOpacity>
          <Records />
          <DangerZone />
        </ScrollView>
        <Navbar style={styles.navbar} />
      </View>
    </PaperProvider>
  );
}

const sharedStyles = {
  buttonWide: {
    width: '100%',
    borderRadius: 20,
    padding: 3,
    alignSelf: 'center',
    marginTop: 15,
  },
  modalTextInput: {
    backgroundColor: '#F1EDDF',
    padding: 10,
    paddingLeft: 15,
    margin: 5,
    borderRadius: 10,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7F3',
  },
  scrollViewContent: {
    paddingBottom: 100,
  },
  header: {
    width: '100%',
    height: height * 0.1,
    paddingTop: height * 0.03,
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
    fontSize: scaleFont(20),
  },
  section: {
    marginTop: 115,
    flexDirection: 'row',
    paddingLeft: width * 0.05,
    alignItems: 'center',
  },
  editIcon: {
    marginLeft: 10,
    height: 20,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: scaleFont(18),
  },
  h2Red: {
    fontWeight: 'bold',
    fontSize: scaleFont(18),
    color: '#B63939',
    marginLeft: width * 0.05,
  },
  h3: {
    marginBottom: 10,
    color: '#919191',
    fontSize: scaleFont(14),
  },
  h3Black: {
    marginBottom: 10,
    fontSize: scaleFont(18),
    fontWeight: 'bold',
    color: '#2A1735',
  },
  loginContent: {
    color: '#2A1735',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: scaleFont(14),
  },
  loginInformation: {
    padding: width * 0.05,
    margin: width * 0.05,
    borderRadius: 15,
    backgroundColor: '#F1EDDF',
  },
  premiumPromotion: {
    margin: width * 0.05,
    marginTop: 0,
    borderRadius: 15,
    backgroundColor: '#F1EDDF',
  },
  premiumPromotionContent: {
    padding: width * 0.05,
  },
  promotionImage: {
    width: '100%',
    height: height * 0.12,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  promotionText: {
    marginTop: -10,
    marginBottom: 5,
    fontSize: scaleFont(14),
  },
  recordContainer: {
    marginTop: -20,
    padding: width * 0.05,
  },
  recordButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  recordButton: {
    width: width * 0.4,
    height: height * 0.2,
    padding: width * 0.05,
    margin: width * 0.0125,
    borderRadius: 30,
  },
  recordText: {
    marginTop: -5,
    fontSize: scaleFont(14),
  },
  dangerContainer: {
    marginTop: -5,
  },
  dangerContent: {
    padding: width * 0.05,
    margin: width * 0.05,
    paddingTop: height * 0.01,
    marginTop: height * 0.01,
    borderRadius: 15,
    backgroundColor: '#F8F7F3',
    borderColor: '#BBB9B5',
    borderWidth: 2,
  },
  buttonWideDanger: {
    ...sharedStyles.buttonWide,
    backgroundColor: '#D75D5D',
  },
  buttonWideOutlineDanger: {
    ...sharedStyles.buttonWide,
    borderColor: '#D75D5D',
    borderWidth: 3,
    backgroundColor: '#F8F7F3',
  },
  buttonWideRegular: {
    ...sharedStyles.buttonWide,
    backgroundColor: '#B28BEB',
  },
  buttonWideOutlineRegular: {
    ...sharedStyles.buttonWide,
    borderColor: '#B28BEB',
    borderWidth: 3,
    backgroundColor: '#F8F7F3',
  },
  modal: {
    backgroundColor: '#F8F7F3',
    padding: width * 0.05,
    margin: width * 0.05,
    borderRadius: 15,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: scaleFont(18),
    marginBottom: 10,
    textAlign: 'center',
  },
  modalTextInput: sharedStyles.modalTextInput,
});
