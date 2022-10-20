import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../assets';
import { TextInput } from 'react-native-gesture-handler';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={Background}
        style={styles.imageBackground}
      >
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.header}>Welcome!</Text>
          </View>
          <View style={styles.loginInfo}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.textInput}
              placeholderTextColor="white"
              placeholder="Password"
              secureTextEntry
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
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
    paddingHorizontal: 100,
    color: 'white',
    fontFamily: 'Montserrat',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
});

export default LoginScreen;
