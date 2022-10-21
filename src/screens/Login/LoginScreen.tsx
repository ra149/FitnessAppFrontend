import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../../assets';
import { Logo } from '../../../assets';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../../components/CustomButton';
import { styles } from './style';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [isFocusedUsername, setIsFocusedUsername] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
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
              style={[
                styles.textInput,
                { borderColor: isFocusedUsername ? '#49FFFF' : 'white' },
              ]}
              onFocus={() => setIsFocusedUsername(true)}
              onBlur={() => setIsFocusedUsername(false)}
              placeholder="Email"
              placeholderTextColor="white"
            />
            <TextInput
              style={[
                styles.textInput,
                { borderColor: isFocusedPassword ? '#49FFFF' : 'white' },
              ]}
              onFocus={() => setIsFocusedPassword(true)}
              onBlur={() => setIsFocusedPassword(false)}
              placeholderTextColor="white"
              placeholder="Password"
              secureTextEntry
            />
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <Text style={styles.forgotPassword}>Forgot your password?</Text>
            </TouchableOpacity>
            <View style={{ alignContent: 'center', alignItems: 'center' }}>
              <Button title={'Login'} />
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Text style={styles.imageText}>Powered by:</Text>
            <Image
              source={Logo}
              resizeMode={'contain'}
              style={{ width: 150 }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
