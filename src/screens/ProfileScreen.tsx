import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import Button from '../components/CustomButton';
import AuthContext, { AuthContextType } from '../context/AuthContext';

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext) as AuthContextType;
  return (
    <View>
      <Button onPress={logout} />
    </View>
  );
};

export default ProfileScreen;
