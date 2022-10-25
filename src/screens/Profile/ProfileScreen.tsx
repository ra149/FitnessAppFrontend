import { View, Text, Image } from 'react-native';
import React, { useContext } from 'react';
import Button from '../../components/CustomButton';
import AuthContext, { AuthContextType } from '../../context/AuthContext';
import { styles } from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from '@rneui/base';

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext) as AuthContextType;
  return (
    <LinearGradient colors={['#191C1F', '#2A3035']} style={styles.container}>
      <View style={styles.profile}>
        <Avatar
          containerStyle={{ position: 'absolute', bottom: 180 }}
          rounded
          size="xlarge"
          source={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
        <View>
          <Text style={styles.name}>Olga</Text>
        </View>
      </View>
      <Button onPress={logout} />
    </LinearGradient>
  );
};

export default ProfileScreen;
