import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import timerStopIllust from '../../../assets/timerStopIllust.png';

const QuitModal = ({ modalVisible, setModalVisible, onQuit }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image
            source={timerStopIllust} // Update this path to your illustration file
            style={styles.modalIllustration}
          />
          <Text style={styles.modalTitle}>Are you sure?</Text>
          <Text style={styles.modalMessage}>It will make dee sad...</Text>
          <TouchableOpacity style={styles.noButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.noButtonText}>NO, TAKE ME BACK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.yesButton} onPress={onQuit}>
            <Text style={styles.yesButtonText}>YES, END THE TIMER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 350, // Adjust the width to make the modal wider
    height: 500, // Adjust the height to make the modal taller
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalIllustration: {
    width: 250, // Adjust the width and height as needed
    height: 230,
    marginBottom: 30,
  },
  modalTitle: {
    fontSize: 24,
    color: '#2A1735',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  modalMessage: {
    fontSize: 18,
    color: '#7D4DB4',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  noButton: {
    backgroundColor: '#C7A4FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  noButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  yesButton: {
    borderColor: '#C7A4FF',
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  yesButtonText: {
    color: '#C7A4FF',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default QuitModal;
