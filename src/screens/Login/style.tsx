import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
  },
  header: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Montserrat',
  },
  innerContainer: {
    paddingTop: 110,
    alignContent: 'space-between',
    alignItems: 'center',
  },
  loginInfo: {
    paddingTop: 100,
  },
  textInput: {
    marginBottom: 20,
    placeholderTextColor: 'white',
    padding: 10,
    width: 300,
    color: 'white',
    fontFamily: 'Montserrat',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: 'rgba(42,38,53,0.6)',
  },
  forgotPassword: {
    color: 'white',
    fontFamily: 'Montserrat',
  },
  imageContainer: {
    marginTop: 170,
  },
  imageText: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: 18,
  },
});
