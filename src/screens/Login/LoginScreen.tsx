import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { Background } from '../../../assets';
import { Logo } from '../../../assets';
import Button from '../../components/CustomButton/CustomButton';
import { styles } from './LoginScreen.styles';
import AuthContext, { AuthContextType } from '../../context/AuthContext';

const LoginScreen = () => {
  const [isFocusedUsername, setIsFocusedUsername] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading, login } = useContext(AuthContext) as AuthContextType;

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
              onChangeText={setEmail}
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
              onChangeText={setPassword}
            />
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <Text style={styles.forgotPassword}>Forgot your password?</Text>
            </TouchableOpacity>
            <View style={{ alignContent: 'center', alignItems: 'center' }}>
              <Button title="Login" onPress={() => login(email, password)} />
              <ActivityIndicator
                animating={isLoading}
                size="large"
                color="white"
              />
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
