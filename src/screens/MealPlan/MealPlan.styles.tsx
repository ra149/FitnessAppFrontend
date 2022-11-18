import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 32,
  },
  name: {
    color: '#49FFFF',
    fontSize: 22,
    fontFamily: 'Montserrat',
    textShadowColor: '#49FFFF',
    textShadowRadius: 10,
  },
  heading: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat',
    marginTop: 15,
  },
  text: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: 13,
  },
  hr: {
    borderTopColor: 'white',
    borderTopWidth: 0.7,
    opacity: 0.6,
    marginTop: 20,
    width: '100%',
  },
  hrNew: {
    height: 0.7,
    opacity: 0.6,
    width: '100%',
    backgroundColor: 'white',
  },

  innerContainer: {
    backgroundColor: '#2A3035',
    flex: 1,
    borderRadius: 14,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  innerContainerImage: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    width: '100%',
  },
  dateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  buttonsContainer: { flexDirection: 'row' },
  buttonBorder: {
    borderWidth: 0.5,
    borderRadius: 12,
    padding: 5,
    borderColor: '#49FFFF',
    marginTop: 8,
    marginRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekChangePrevText: { color: '#FD5F00' },
  line: {
    color: 'white',
  },
  weekChangeNextText: { color: '#FD5F00' },
});
