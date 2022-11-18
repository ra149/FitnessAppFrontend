import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalView: {
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
  },
  modalHeader: {
    alignItems: 'center',
  },
  modalDayHeader: { justifyContent: 'center', width: '100%' },
  modalMealProgramContainer: {
    justifyContent: 'center',
    marginTop: 20,
  },
  modalText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Montserrat',
  },
  mealPlanText: {
    textAlign: 'center',
    color: '#FD5F00',
    fontSize: 14,
    fontFamily: 'Montserrat',
  },
  hr: {
    borderTopColor: 'white',
    borderTopWidth: 0.7,
    opacity: 0.6,
    marginTop: 20,
  },
  hrNew: {
    height: 0.7,
    opacity: 0.6,
    width: '100%',
    backgroundColor: 'white',
  },
  bottomContainer: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHeader: {
    color: '#49FFFF',
    fontSize: 14,
    fontFamily: 'Montserrat',
  },
  dataContainer: {
    marginTop: 10,
  },
  dataText: {
    color: 'white',
  },
  dataNumbersText: {
    color: '#FD5F00',
  },
});
