import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  profile: {
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#2A3035',
    borderRadius: 10,
    marginTop: 130,
    paddingTop: 100,
  },
  name: {
    color: '#49FFFF',
    fontSize: 26,
    fontFamily: 'Montserrat',
    marginTop: 20,
    textShadowColor: '#49FFFF',
    textShadowRadius: 10,
  },
  personal: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: 16,
  },
  personalData: {
    color: '#49FFFF',
    fontFamily: 'Montserrat',
    fontSize: 16,
  },
  statistics: {
    color: '#49FFFF',
    fontFamily: 'Montserrat',
    fontSize: 18,
    paddingHorizontal: 10,
  },
  logout: {
    position: 'absolute',
    left: '80%',
    top: '10%',
    width: '100%',
  },
  hr: {
    borderTopColor: 'white',
    borderTopWidth: 0.2,
    marginTop: 20,
    width: '100%',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  infoData: {
    flexDirection: 'row',
    paddingBottom: 20,
    justifyContent: 'space-around',
  },
  dailyIntakeView: {
    width: '100%',
    paddingTop: 30,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dateView: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  date: {
    color: '#697177',
    fontSize: 16,
  },
  circlesView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  circlesView2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
    paddingTop: 20,
  },
  ratioCirclesView: { justifyContent: 'center', paddingLeft: 25 },
  ratioText: { color: 'white', fontSize: 14, fontWeight: 'bold' },
});
